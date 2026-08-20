/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * dkbkdsbc
 * hdkbscdbki
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useParams, useLocation, Link } from 'react-router-dom';
import { Locale } from './types';
import ScrollToTop from './routing/ScrollToTop';
import RootRedirect from './routing/RootRedirect';
import LocaleAliasRedirect from './routing/LocaleAliasRedirect';
import {
  normalizeLocaleParam,
  saveLocale,
  getPreferredLocale,
  localeToOgLocale,
} from './routing/locale';
import {
  PageId,
  getPageFromPathname,
  getArticleIdFromPathname,
  getDoctorIdFromPathname,
  getServiceCategoryIdFromPathname,
  getServiceSubIdFromPathname,
  getPromoSlugFromPathname,
  getDaavlinSectionFromPathname,
  getDaavlinModelIdFromPathname,
  getLegacyDaavlinModelRedirectPath,
  getClinicLaserModelRedirectPath,
  pagePath,
  switchLocaleInPath,
  articlePath,
} from './routing/paths';
import { useAppNavigation } from './routing/useAppNavigation';
import { DICTIONARY, GALLERY_IMAGS, getClinicRatingSummary } from './data';
import { clearAllLocalMedia } from './utils/localMediaStorage';
import Header from './components/Header';
import Hero from './components/Hero';
import PromoServicePage from './components/PromoServicePage';
import { findPromoSlideBySlug } from './data/homePromoCarousel';
import About from './components/About';
import Services from './components/Services';
import ServiceCategoryPage from './components/ServiceCategoryPage';
import ServiceSubPage from './components/ServiceSubPage';
import Doctors from './components/Doctors';
import DoctorPage from './components/DoctorPage';
import VideosPage from './components/VideosPage';
import BranchesPage from './components/BranchesPage';
import TechnologiesPage from './components/TechnologiesPage';
import DaavlinFotoKabinalariPage from './components/DaavlinFotoKabinalariPage';
import DaavlinModelPage from './components/DaavlinModelPage';
import DermoScanPage from './components/DermoScanPage';
import SciencePage from './components/SciencePage';
import ObrazovaniyaPage from './components/ObrazovaniyaPage';
import BrandPage from './components/BrandPage';
import { DAAVLIN_MODEL_DEEP } from './data/daavlinModelDeepContent';
import ClinicEquipmentParkPage from './components/ClinicEquipmentParkPage';
import ResultsPage from './components/ResultsPage';
import Prices from './components/Prices';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import LegalPage from './components/LegalPage';
import MediaImage from './components/MediaImage';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Clock, ArrowRight, RefreshCw, AlertCircle, ExternalLink } from 'lucide-react';
import { useClinicData } from './hooks/useClinicData';
import { useCmsData } from './hooks/useCmsData';
import { createAppointment } from './api/publicApi';
import { submitAndPublishCustomerReview } from './api/submitCustomerReview';
import { resolveArticleRichContent } from './utils/articleContent';
import { fetchClientCountFromApi } from './utils/clientCount';
import { getPlatformLogo } from './utils/platformLogo';
import { ApiError } from './api/client';
import { findArticleByRouteParam, resolveArticleRouteKey, resolveArticleRedirectTarget, filterPublicArticles } from './utils/articles';
import { openAppointmentBooking, APPOINTMENT_LINK_REL, APPOINTMENT_LINK_TARGET, resolveClinicRatingUrl } from './config/links';
import { getLocalizedImage } from './utils/localizedImage';
import ArticleViewsBadge from './components/ArticleViewsBadge';
import ArticleHashtagList from './components/ArticleHashtagList';

import HomeCarousel from './components/HomeCarousel';
import DoctorsHomeMarquee from './components/DoctorsHomeMarquee';
import ServiceTeaserCard from './components/ServiceTeaserCard';
import PartnersCarousel from './components/PartnersCarousel';
import CustomerReviewsSection from './components/CustomerReviewsSection';
import QrFeedbackPage from './components/QrFeedbackPage';
import KokandLandingPage from './components/KokandLandingPage';
import ClinicAiChat from './components/ClinicAiChat';
import { buildClinicAiContext } from './utils/clinicAiContext';
import { sortDoctorsFeaturedFirst } from './utils/doctors';
import { getHomeServiceTeaserCategories } from './utils/homeServiceTeaser';
import {
  buildArticleSeoTitle,
  buildServiceSeoTitle,
  getTabSeo,
} from './seo/pageMeta';
import {
  getCanonicalUrl,
  syncCanonicalLink,
  syncHreflangLinks,
  type RouteSeoContext,
} from './seo/routeSeo';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/rus/*" element={<LocaleAliasRedirect locale="ru" />} />
        <Route path="/eng/*" element={<LocaleAliasRedirect locale="en" />} />
        <Route path="/fikr" element={<Navigate to="/uz/fikr" replace />} />
        <Route path="/admin" element={<ClinicShell forcePage="admin" />} />
        <Route path="/:locale/*" element={<ClinicShell />} />
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </>
  );
}

interface ClinicShellProps {
  forcePage?: 'admin';
}

function ClinicShell({ forcePage }: ClinicShellProps) {
  const { locale: localeParam } = useParams();
  const location = useLocation();
  const parsedLocale = normalizeLocaleParam(localeParam);
  const [adminLocale, setAdminLocale] = useState<Locale>(() => getPreferredLocale());
  const locale = parsedLocale ?? (forcePage === 'admin' ? adminLocale : getPreferredLocale());
  const currentPage: PageId = forcePage ?? getPageFromPathname(location.pathname);
  const articleId = getArticleIdFromPathname(location.pathname);
  const doctorId = getDoctorIdFromPathname(location.pathname);
  const serviceCategoryId = getServiceCategoryIdFromPathname(location.pathname);
  const serviceSubId = getServiceSubIdFromPathname(location.pathname);
  const promoSlug = getPromoSlugFromPathname(location.pathname);
  const daavlinSection = getDaavlinSectionFromPathname(location.pathname);
  const daavlinModelId = getDaavlinModelIdFromPathname(location.pathname);
  const legacyDaavlinModelRedirect = getLegacyDaavlinModelRedirectPath(location.pathname);
  const clinicLaserModelRedirect = getClinicLaserModelRedirectPath(location.pathname);
  const activePromoSlide = promoSlug ? findPromoSlideBySlug(promoSlug) : null;
  const { goToPage, goToArticle, goToDoctor, goToServiceCategory, goToServiceSub, changeLocale: navigateLocale } = useAppNavigation(locale);
  const invalidLocale = Boolean(localeParam && !parsedLocale && !forcePage);
  const legacyContactsRedirect =
    !forcePage && location.pathname.split('/').filter(Boolean)[1] === 'contacts';

  if (legacyContactsRedirect && parsedLocale) {
    return <Navigate to={pagePath(parsedLocale, 'branches')} replace />;
  }

  const changeLocale = (nextLocale: Locale) => {
    saveLocale(nextLocale);
    if (forcePage === 'admin') {
      setAdminLocale(nextLocale);
      return;
    }
    navigateLocale(nextLocale);
  };

  const {
    doctors: dynamicDoctors,
    serviceCategories: dynamicServiceCategories,
    prices: dynamicPrices,
    articles: dynamicArticles,
    loading: dataLoading,
    error: dataError,
    refetch: refetchClinicData,
    updateArticleViews,
  } = useClinicData();

  const {
    partners: cmsPartners,
    reviews: cmsReviews,
    branches: cmsBranches,
    treatmentResults: cmsTreatmentResults,
    videos: cmsVideos,
    clinicRatings: cmsClinicRatings,
    loading: cmsLoading,
    error: cmsError,
    clientCount: cmsClientCount,
    refetch: refetchCms,
  } = useCmsData();

  const activeServiceCategory = serviceCategoryId
    ? dynamicServiceCategories.find((category) => category.id === serviceCategoryId) ?? null
    : null;

  const activeServiceSub =
    activeServiceCategory && serviceSubId
      ? activeServiceCategory.subServices.find((sub) => sub.id === serviceSubId) ?? null
      : null;

  const activeArticlePreview = articleId
    ? findArticleByRouteParam(articleId, dynamicArticles) ?? null
    : null;

  const activeDoctorPreview = doctorId
    ? dynamicDoctors.find((doc) => doc.id === doctorId) ?? null
    : null;

  const [dynamicDictionary, setDynamicDictionary] = useState(() => {
    const saved = localStorage.getItem('radeski_dictionary_v1');
    return saved ? JSON.parse(saved) : DICTIONARY;
  });

  const d = { ...DICTIONARY[locale], ...(dynamicDictionary[locale] || {}) };

  // Inline Consultation / Be Beautiful form states
  const [inlinePhone, setInlinePhone] = useState('');
  const [inlineSubmitted, setInlineSubmitted] = useState(false);
  const [inlineLoading, setInlineLoading] = useState(false);

  const handleSaveLocalData = (type: string, data: unknown) => {
    if (type === 'dictionary') {
      localStorage.setItem('radeski_dictionary_v1', JSON.stringify(data));
      setDynamicDictionary(data as typeof DICTIONARY);
    }
  };

  const handleResetLocalData = () => {
    localStorage.removeItem('radeski_dictionary_v1');
    void clearAllLocalMedia();
    setDynamicDictionary(DICTIONARY);
    void refetchCms();
  };

  // Automatically inject schema.org metadata and SEO tags dynamically on load / locale / tab change
  useEffect(() => {
    // 1. Remove previous schema configurations
    const existingScript = document.getElementById('clinical-schema-jsonld');
    if (existingScript) existingScript.remove();

    // 2. Define medical business schema payload
    const medicalBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Radeski Skin & Aesthetic Clinic",
      "alternateName": ["Radeski Skin Clinic", "Radeski", "Радески"],
      "url": "https://radeski.uz/uz",
      "logo": `${window.location.origin}/gallery/logo.webp`,
      "image": `${window.location.origin}/gallery/logo.webp`,
      "telephone": "+998732007373",
      "priceRange": "$$",
      "inLanguage": ["uz", "ru", "en"],
      "medicalSpecialty": ["Dermatology", "CosmeticSurgery", "Oncology"],
      "description":
        locale === 'uz'
          ? "Farg'onadagi dermatologiya va kosmetologiya klinikasi: IPL, lazer, fototerapiya, dermatoskopiya."
          : locale === 'ru'
            ? "Клиника дерматологии и косметологии в Фергане: IPL, лазер, фототерапия, дерматоскопия."
            : "Dermatology and cosmetology clinic in Fergana: IPL, laser, phototherapy, dermatoscopy.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "O'zbekiston Ovozi ko'chasi, 1A-bino",
        "addressLocality": "Farg'ona",
        "addressRegion": "Farg'ona",
        "addressCountry": "UZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.3864",
        "longitude": "71.7864"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "sameAs": [
        "https://radeski.uz/uz",
        "https://radeski.uz/ru",
        "https://radeski.uz/en"
      ]
    };

    // 3. Dynamically generate an array of 'FAQPage' schema structures based on Service Categories and current locale
    const faqPageSchemas = dynamicServiceCategories.map(category => {
      const categoryTitle = category.title[locale] || category.title['uz'];
      const categoryDesc = category.description[locale] || category.description['uz'];
      const subServicesList = category.subServices.map(sub => sub.name[locale] || sub.name['uz']).join(', ');

      let question = '';
      let answer = '';

      if (locale === 'uz') {
        question = `Radeski klinikasida ${categoryTitle} xizmati va uning qanday turlari mavjud?`;
        answer = `Radeski klinikasida ${categoryTitle} xizmati eng yuqori tibbiy standartlar asosida taqdim etiladi. Xizmat tavsifi: ${categoryDesc} Ushbu yo'nalish bo'yicha quyidagi ixtisoslashgan xizmatlar ko'rsatiladi: ${subServicesList}.`;
      } else if (locale === 'ru') {
        question = `Как оказывается услуга ${categoryTitle} в клинике Radeski и какие процедуры входят?`;
        answer = `В клинике Radeski услуга ${categoryTitle} оказывается на самом высоком уровне надежности и безопасности. Описание: ${categoryDesc} Наше отделение предлагает следующие специализированные процедуры: ${subServicesList}.`;
      } else {
        question = `What is the ${categoryTitle} medical service at Radeski Clinic and what procedures are included?`;
        answer = `${categoryTitle} services at Radeski Clinic are delivered according to premier global healthcare standards. Description: ${categoryDesc} Our specialized center offers: ${subServicesList}.`;
      }

      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": answer
            }
          }
        ]
      };
    });

    // 4. Combine schemas into a single array
    const schemaData = [medicalBusinessSchema, ...faqPageSchemas];

    // 5. Inject script element
    const script = document.createElement('script');
    script.id = 'clinical-schema-jsonld';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // 6. Route + locale SEO (language-specific titles for Google)
    const activeSEO = getTabSeo(locale, currentPage);

    const daavlinModelSeo = daavlinModelId ? DAAVLIN_MODEL_DEEP[daavlinModelId] : null;

    const seoTitle = activeArticlePreview
      ? buildArticleSeoTitle(activeArticlePreview.title[locale], locale)
      : activeDoctorPreview
        ? buildServiceSeoTitle(activeDoctorPreview.name[locale], locale)
        : activeServiceSub
          ? buildServiceSeoTitle(activeServiceSub.name[locale], locale)
          : activeServiceCategory
            ? buildServiceSeoTitle(activeServiceCategory.title[locale], locale)
            : daavlinModelSeo
              ? daavlinModelSeo.seoTitle[locale]
              : activeSEO.title;
    const seoDesc = activeArticlePreview
      ? activeArticlePreview.summary[locale]
      : activeDoctorPreview
        ? activeDoctorPreview.bio[locale]
        : activeServiceSub
          ? activeServiceSub.description[locale]
          : activeServiceCategory
            ? activeServiceCategory.description[locale]
            : daavlinModelSeo
              ? daavlinModelSeo.seoDesc[locale]
              : activeSEO.desc;

    document.title = seoTitle;

    // Update document language
    document.documentElement.lang = locale;

    const seoContext: RouteSeoContext = {
      pathname: location.pathname,
      forcePage,
      currentPage,
      articleId,
      doctorId,
      serviceCategoryId,
      serviceSubId,
      promoSlug,
      daavlinSection,
      daavlinModelId,
      resolvedArticleRouteKey: articleId
        ? resolveArticleRedirectTarget(articleId) ??
          (activeArticlePreview ? resolveArticleRouteKey(activeArticlePreview) : undefined)
        : undefined,
      resolvedDoctorId: activeDoctorPreview?.id ?? doctorId ?? undefined,
      resolvedServiceCategoryId: activeServiceCategory?.id ?? serviceCategoryId ?? undefined,
      resolvedServiceSubId: activeServiceSub?.id ?? serviceSubId ?? undefined,
    };

    const canonicalUrl = getCanonicalUrl(seoContext);

    // Helper functions to safely update or append heads meta
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateOg = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const seoKeywords = activeArticlePreview
      ? resolveArticleRichContent(activeArticlePreview, locale).tags.join(', ')
      : activeSEO.keywords;

    // Update main Search Engine optimization tags
    updateMeta('description', seoDesc);
    updateMeta('keywords', seoKeywords);

    // Update Social sharing graph protocols
    updateOg('og:title', seoTitle);
    updateOg('og:description', seoDesc);
    updateOg('og:url', canonicalUrl);
    updateOg('og:locale', localeToOgLocale(locale));

    syncCanonicalLink(seoContext);
    syncHreflangLinks(seoContext);

  }, [locale, currentPage, dynamicServiceCategories, dynamicArticles, dynamicDoctors, location.pathname, articleId, doctorId, activeArticlePreview, activeDoctorPreview, serviceCategoryId, serviceSubId, activeServiceCategory, activeServiceSub, forcePage, promoSlug, daavlinSection, daavlinModelId]);

  // Barcha "Qabulga yozilish" tugmalari Hipolink onlayn qabulga yo'naltiradi
  const handleOpenAppointmentWithService = (_catId?: string) => {
    openAppointmentBooking();
  };

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlinePhone.trim()) return;

    setInlineLoading(true);
    try {
      await createAppointment({ phone_number: inlinePhone.trim() });
      setInlineSubmitted(true);
      setInlinePhone('');
      void fetchClientCountFromApi();
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : locale === 'uz'
            ? 'Arizani yuborishda xatolik yuz berdi'
            : locale === 'ru'
              ? 'Ошибка при отправке заявки'
              : 'Failed to submit request';
      alert(message);
    } finally {
      setInlineLoading(false);
    }
  };

  useEffect(() => {
    if (parsedLocale) saveLocale(parsedLocale);
  }, [parsedLocale]);

  const homeDoctorsCarousel = useMemo(
    () => sortDoctorsFeaturedFirst(dynamicDoctors),
    [dynamicDoctors],
  );

  const homeServiceTeaserCategories = useMemo(
    () => getHomeServiceTeaserCategories(dynamicServiceCategories),
    [dynamicServiceCategories],
  );

  const clinicAiContext = useMemo(
    () =>
      buildClinicAiContext(locale, {
        serviceCategories: dynamicServiceCategories,
        doctors: dynamicDoctors,
        articles: dynamicArticles,
      }),
    [locale, dynamicServiceCategories, dynamicDoctors, dynamicArticles],
  );

  const isQrFeedbackPage = currentPage === 'fikr';

  if (invalidLocale) {
    return (
      <Navigate
        to={switchLocaleInPath(location.pathname, getPreferredLocale())}
        replace
      />
    );
  }

  return (
    <div
      className={`bg-brand-white min-h-screen text-brand-text-primary antialiased selection:bg-brand-gold selection:text-white ${
        isQrFeedbackPage ? 'pt-0' : 'pt-[158px] sm:pt-[136px]'
      }`}
    >

      {(dataError || cmsError) && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
          <div className="site-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-2 text-sm text-amber-900">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{dataError || cmsError}</span>
            </div>
            <button
              onClick={() => { void refetchClinicData(); void refetchCms(); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold rounded-lg cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              {locale === 'uz' ? 'Qayta yuklash' : locale === 'ru' ? 'Повторить' : 'Retry'}
            </button>
          </div>
        </div>
      )}

      {dataLoading && currentPage !== 'admin' && !isQrFeedbackPage && (
        <div className="fixed inset-0 z-30 bg-white/60 backdrop-blur-[1px] flex items-center justify-center pointer-events-none">
          <div className="px-4 py-2 bg-white border border-brand-sectiongray rounded-xl shadow-sm text-sm text-brand-text-muted">
            {locale === 'uz' ? 'Ma\'lumotlar yuklanmoqda...' : locale === 'ru' ? 'Загрузка данных...' : 'Loading data...'}
          </div>
        </div>
      )}

      {/* 1. Header Navigation */}
      {!isQrFeedbackPage && (
        <Header
          currentPage={currentPage}
          locale={locale}
          onNavigate={goToPage}
          onChangeLocale={changeLocale}
          onOpenAppointment={() => handleOpenAppointmentWithService()}
          serviceCategories={dynamicServiceCategories}
          onOpenServiceCategory={goToServiceCategory}
        />
      )}

      {/* 2. Main Page Renderings based on current routing Tab */}
      <AnimatePresence mode="wait">
        <motion.main
          key={`${currentPage}-${articleId ?? ''}-${doctorId ?? ''}-${serviceCategoryId ?? ''}-${serviceSubId ?? ''}-${promoSlug ?? ''}-${daavlinSection}-${daavlinModelId ?? ''}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {promoSlug && activePromoSlide && (
            <PromoServicePage
              locale={locale}
              slide={activePromoSlide}
              appointmentLabel={d.appointmentBtn}
            />
          )}

          {promoSlug && !activePromoSlide && (
            <section className="py-20 text-center min-h-[50vh]">
              <p className="text-brand-text-muted">
                {locale === 'uz' ? 'Sahifa topilmadi' : locale === 'ru' ? 'Страница не найдена' : 'Page not found'}
              </p>
              <button type="button" onClick={() => goToPage('home')} className="mt-4 text-brand-gold font-semibold cursor-pointer">
                {locale === 'uz' ? 'Bosh sahifa' : locale === 'ru' ? 'Главная' : 'Home'}
              </button>
            </section>
          )}

          {!promoSlug && currentPage === 'home' && (
            <div id="home-dashboard">
              {/* Hero Slider banner */}
              <Hero
                locale={locale}
                onOpenAppointment={() => handleOpenAppointmentWithService()}
                onNavigate={goToPage}
                clientCount={cmsClientCount}
                doctorsCount={20}
              />

              {/* 12 Departments - Services Carousel teaser */}
              <section id="services-teaser" className="py-16 bg-brand-offwhite">
                <div className="site-container">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 lg:mb-10">
                    <div>
                      <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">{d.navServices}</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mt-1 tracking-tight">
                        {locale === 'uz' ? "Biz davolaydigan asosiy sohalar" : locale === 'ru' ? "Ключевые области лечения" : "Primary Clinical Expertise"}
                      </h3>
                    </div>
                    <button
                      onClick={() => goToPage('services')}
                      className="text-xs font-bold text-brand-gold hover:text-brand-gold-dark flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <span>{locale === 'uz' ? "Barcha 12 ta xizmatni ko'rish" : locale === 'ru' ? "Посмотреть все 12 направлений" : "Explore all 12 services"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 xl:gap-6">
                    {homeServiceTeaserCategories.map((category) => (
                      <ServiceTeaserCard
                        key={category.id}
                        category={category}
                        locale={locale}
                        viewDetailsLabel={d.viewDetails}
                        onOpen={goToServiceCategory}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* Professional Clincal Doctors Carousel teaser */}
              <section id="doctors-teaser" className="py-16 bg-brand-white border-y border-brand-sectiongray">
                <div className="site-container">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
                    <div>
                      <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">{d.navDoctors}</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mt-1 tracking-tight">
                        {locale === 'uz' ? "Malakali mutaxassislarimiz" : locale === 'ru' ? "Наши квалифицированные врачи" : "Meet Our Certified Physicians"}
                      </h3>
                    </div>
                    <button
                      onClick={() => goToPage('doctors')}
                      className="text-xs font-bold text-brand-gold hover:text-brand-gold-dark flex items-center gap-1 cursor-pointer"
                    >
                      <span>{locale === 'uz' ? "Barcha shifokorlar profili" : locale === 'ru' ? "Посмотреть анкеты всех врачей" : "Meet entire clinical team"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <DoctorsHomeMarquee
                    doctors={homeDoctorsCarousel}
                    locale={locale}
                    educationLabel={d.education}
                    viewProfileLabel={d.viewProfile}
                    onDoctorClick={goToDoctor}
                    ariaLabel={
                      locale === 'uz'
                        ? 'Shifokorlar karuseli'
                        : locale === 'ru'
                          ? 'Карусель врачей'
                          : 'Doctors carousel'
                    }
                  />
                </div>
              </section>

              {/* Be Beautiful - Inline CTA consultation form */}
              <section id="be-beautiful-cta" className="py-20 bg-gradient-to-tr from-brand-dark-navy via-brand-dark-navy to-brand-deep-blue relative overflow-hidden">
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-gold/15 rounded-full blur-3xl" />
                <div className="site-container text-center relative z-10">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-white tracking-tight">
                    {d.beBeautiful}
                  </h3>
                  <p className="text-slate-300 mt-4 max-w-xl mx-auto text-sm sm:text-base font-light">
                    {d.beBeautifulDesc}
                  </p>

                  {!inlineSubmitted ? (
                    <form onSubmit={handleInlineSubmit} className="mt-8 max-w-md mx-auto w-full px-1 flex flex-col sm:flex-row gap-3">
                      <input
                        id="inline-phone-input"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        value={inlinePhone}
                        onChange={(e) => setInlinePhone(e.target.value)}
                        placeholder="+998 (__) ___-__-__"
                        className="w-full flex-1 px-4 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 focus:bg-white font-medium focus:border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/25 text-white focus:text-brand-text-primary transition-all text-base sm:text-sm placeholder-slate-400 min-h-[48px]"
                      />
                      <button
                        id="inline-submit-btn"
                        type="submit"
                        disabled={inlineLoading}
                        className="w-full sm:w-auto px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-extrabold text-sm rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-gold/10 min-h-[48px]"
                      >
                        {inlineLoading ? (locale === 'uz' ? "Yuborilmoqda..." : "Отправка...") : d.submitBtn}
                      </button>
                    </form>
                  ) : (
                    <div className="mt-8 p-6 bg-brand-gold/10 border border-brand-gold-dark/30 rounded-2xl max-w-md mx-auto text-brand-gold-light text-sm font-medium leading-relaxed">
                      {locale === 'uz' ? "Arizangiz qabul qilindi! Operatorlarimiz tez orada sizga qo'ng'iroq qilishadi." : 
                       locale === 'ru' ? "Заявка успешно принята! Наши операторы скоро свяжутся с вами." : 
                                         "Your request has been filed! Our desk operators will call you shortly."}
                    </div>
                  )}
                </div>
              </section>

              {/* Trust Ratings & Gallery and Clinical Quality Indicators */}
              <section id="trust-reviews" className="py-16 bg-brand-sectiongray">
                <div className="site-container text-center">
                  <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">{locale === 'uz' ? "Ko'rsatkichlar & Fikrlar" : locale === 'ru' ? "Рейтинги и Отзывы" : "Endorsements"}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary tracking-tight mt-1 mb-4">
                    {locale === 'uz' ? "Insonlar nega aynan bizni tanlashadi?" : locale === 'ru' ? "Почему пациенты доверяют именно нам?" : "What supports our clinical trust?"}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-text-muted max-w-2xl mx-auto leading-relaxed mb-10">
                    {d.trustSectionDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cmsClinicRatings.map((plat) => {
                      const reviewUrl = resolveClinicRatingUrl(plat.platform, plat.url);
                      const platformSummary = getClinicRatingSummary(
                        plat.platform,
                        locale,
                        plat.summary,
                      );
                      const cardClassName =
                        'bg-brand-white rounded-2xl p-6 border border-brand-sectiongray text-left flex flex-col shadow-xs transition-all h-full';
                      const cardContent = (
                        <>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-xl shadow-xs shrink-0">
                              {getPlatformLogo(plat.platform)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <h4 className="font-extrabold text-brand-text-primary text-lg leading-none">{plat.platform}</h4>
                                {reviewUrl ? (
                                  <ExternalLink className="w-4 h-4 text-brand-gold shrink-0 opacity-70" aria-hidden="true" />
                                ) : null}
                              </div>
                              <span className="text-xl font-black text-brand-gold block mt-2">{plat.rating} / 5.0</span>
                              <p className="text-xs text-brand-text-muted mt-1">{plat.count}+ {d.reviewsCount}</p>
                            </div>
                          </div>

                          {platformSummary ? (
                            <div className="mt-5 pt-4 border-t border-brand-sectiongray flex-1">
                              <p className="text-[11px] font-bold text-brand-gold uppercase tracking-wide">
                                {d.trustCardSummaryLabel}
                              </p>
                              <p className="text-xs sm:text-sm text-brand-text-primary font-medium mt-2 leading-relaxed">
                                {platformSummary}
                              </p>
                            </div>
                          ) : null}

                          {reviewUrl ? (
                            <p className="text-[11px] font-semibold text-brand-gold mt-4">
                              {locale === 'uz'
                                ? "Sharhlarni ko'rish"
                                : locale === 'ru'
                                  ? 'Читать отзывы'
                                  : 'View reviews'}
                            </p>
                          ) : null}
                        </>
                      );

                      return reviewUrl ? (
                        <a
                          key={plat.id}
                          href={reviewUrl}
                          target={APPOINTMENT_LINK_TARGET}
                          rel={APPOINTMENT_LINK_REL}
                          className={`${cardClassName} hover:border-brand-gold/35 hover:shadow-md hover:-translate-y-0.5 cursor-pointer group`}
                          aria-label={`${plat.platform} — ${
                            locale === 'uz'
                              ? "sharhlarni ko'rish"
                              : locale === 'ru'
                                ? 'читать отзывы'
                                : 'view reviews'
                          }`}
                        >
                          {cardContent}
                        </a>
                      ) : (
                        <div key={plat.id} className={cardClassName}>
                          {cardContent}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Latest News / Blog preview teaser */}
              <section id="articles-teaser" className="py-16 bg-brand-white border-t border-brand-sectiongray">
                <div className="site-container">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
                    <div>
                      <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">{d.navArticles}</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mt-1 tracking-tight">
                        {locale === 'uz' ? "Teri sog'lig'i haqida so'nggi tavsiyalar" : locale === 'ru' ? "Полезная дерматологическая база знаний" : "Expert Clinical Knowledgebase"}
                      </h3>
                    </div>
                    <button
                      onClick={() => goToPage('articles')}
                      className="text-xs font-bold text-brand-gold hover:text-brand-gold-dark flex items-center gap-1 cursor-pointer"
                    >
                      <span>{locale === 'uz' ? "Barcha maqolalarni o'qish" : locale === 'ru' ? "Посмотреть все статьи" : "Read all articles"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="px-1 sm:px-10">
                    <HomeCarousel
                      items={filterPublicArticles(dynamicArticles)}
                      visibleCount={3}
                      autoPlayMs={5000}
                      arrowsInside
                      getKey={(art) => art.id}
                      gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      ariaLabel={
                        locale === 'uz'
                          ? 'Maqolalar karuseli'
                          : locale === 'ru'
                            ? 'Карусель статей'
                            : 'Articles carousel'
                      }
                      renderItem={(art) => (
                        <Link
                          to={articlePath(locale, resolveArticleRouteKey(art))}
                          className="bg-brand-white rounded-xl border border-brand-sectiongray overflow-hidden shadow-xs hover:shadow-sm transition-all flex flex-col justify-between group cursor-pointer h-full"
                        >
                          <div className="h-48 overflow-hidden bg-brand-offwhite relative">
                            {(() => {
                              const artImage = getLocalizedImage(art.images, locale) ?? art.image;
                              return artImage ? (
                                <MediaImage src={artImage} alt={art.title[locale]} className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-brand-text-muted text-xs">—</div>
                              );
                            })()}
                          </div>
                          <div className="p-5">
                            <span className="text-[10px] text-brand-text-muted font-light font-mono mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                              <span>{art.date}</span>
                              <ArticleViewsBadge views={art.views} locale={locale} className="text-[10px]" />
                            </span>
                            <ArticleHashtagList
                              article={art}
                              locale={locale}
                              limit={5}
                              className="flex flex-wrap gap-x-2 gap-y-1 mb-2"
                              itemClassName="text-[10px] font-semibold text-brand-gold/90"
                            />
                            <h4 className="font-extrabold text-brand-text-primary text-sm sm:text-base leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
                              {art.title[locale]}
                            </h4>
                            <p className="text-xs text-brand-text-muted mt-2 line-clamp-2 leading-relaxed font-light">
                              {art.summary[locale]}
                            </p>
                            <span className="mt-4 inline-flex text-xs font-bold text-brand-gold items-center gap-0.5">
                              {d.readMore} <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </Link>
                      )}
                    />
                  </div>
                </div>
              </section>

              {/* Partners teaser */}
              {cmsPartners.length > 0 && (
                <section id="partners-teaser" className="py-20 bg-gradient-to-b from-brand-offwhite via-brand-white to-brand-offwhite border-t border-brand-sectiongray relative overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true">
                    <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-brand-gold/5 blur-3xl" />
                  </div>

                  <div className="site-container relative">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                      <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">
                        {locale === 'uz' ? 'Hamkorlar' : locale === 'ru' ? 'Партнеры' : 'Partners'}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mt-1 tracking-tight">
                        {locale === 'uz'
                          ? 'Bizning ishonchli hamkorlarimiz'
                          : locale === 'ru'
                            ? 'Наши надежные партнеры'
                            : 'Our trusted partners'}
                      </h3>
                      <p className="text-brand-text-muted mt-4 text-sm sm:text-base leading-relaxed">
                        {locale === 'uz'
                          ? 'Radeski klinikasi dunyoning yetakchi tibbiy va kosmetologik brendlari bilan hamkorlik qiladi.'
                          : locale === 'ru'
                            ? 'Клиника Radeski сотрудничает с ведущими мировыми медицинскими и косметологическими брендами.'
                            : 'Radeski Clinic partners with leading global medical and aesthetic brands.'}
                      </p>
                    </div>

                    <PartnersCarousel
                      partners={cmsPartners}
                      locale={locale}
                      ariaLabel={
                        locale === 'uz'
                          ? 'Hamkorlar karuseli'
                          : locale === 'ru'
                            ? 'Карусель партнеров'
                            : 'Partners carousel'
                      }
                      badgeLabel={
                        locale === 'uz'
                          ? 'Rasmiy hamkor'
                          : locale === 'ru'
                            ? 'Официальный партнер'
                            : 'Official partner'
                      }
                    />
                  </div>
                </section>
              )}

              <CustomerReviewsSection
                locale={locale}
                reviews={cmsReviews}
                serviceCategories={dynamicServiceCategories}
                onSubmitReview={async (review) => {
                  await submitAndPublishCustomerReview(review);
                  await refetchCms();
                }}
              />

              {/* 10. Robust SEO block with coordinates and MAP integration */}
              <section id="seo-rich-block" className="py-20 bg-brand-offwhite border-t border-brand-sectiongray">
                <div className="site-container text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-text-primary tracking-tight">
                    {d.seoTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed max-w-3xl mx-auto mt-4 font-light">
                    {d.seoText}
                  </p>
                  
                  {/* Embedded Location and address details */}
                  <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-brand-text-secondary font-medium">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-white border border-brand-sectiongray rounded-lg shadow-2xs">
                      <MapPin className="w-4 h-4 text-brand-gold" />
                      Farg'ona, O'zbekiston Ovozi 1A
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-white border border-brand-sectiongray rounded-lg shadow-2xs">
                      <Phone className="w-4 h-4 text-brand-gold" />
                      +998 (73) 200-73-73
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-white border border-brand-sectiongray rounded-lg shadow-2xs">
                      <Clock className="w-4 h-4 text-brand-gold" />
                      {locale === 'uz' ? "Ish vaqti: 08:00 - 18:00" : locale === 'ru' ? "Пн.-Сб.: 08:00 - 18:00" : "Mon.-Sat. 8AM - 6PM"}
                    </span>
                  </div>
                </div>
              </section>
            </div>
          )}

          {currentPage === 'fikr' && (
            <QrFeedbackPage
              locale={locale}
              serviceCategories={dynamicServiceCategories}
              onSubmitReview={async (review) => {
                await submitAndPublishCustomerReview(review);
                await refetchCms();
              }}
            />
          )}

          {currentPage === 'about' && (
            <About 
              locale={locale} 
              onOpenAppointment={() => handleOpenAppointmentWithService()} 
              dictionary={d}
            />
          )}

          {currentPage === 'services' && activeServiceCategory && activeServiceSub && (
            <ServiceSubPage
              locale={locale}
              category={activeServiceCategory}
              sub={activeServiceSub}
              articles={dynamicArticles}
              dictionary={d}
              prices={dynamicPrices}
              onBackToCategory={() => goToServiceCategory(activeServiceCategory.id)}
              onBackToList={() => goToPage('services')}
            />
          )}

          {currentPage === 'services' && activeServiceCategory && !activeServiceSub && !serviceSubId && (
            <ServiceCategoryPage
              locale={locale}
              category={activeServiceCategory}
              articles={dynamicArticles}
              dictionary={d}
              prices={dynamicPrices}
              onOpenAppointment={handleOpenAppointmentWithService}
              onOpenSub={(subId) => goToServiceSub(activeServiceCategory.id, subId)}
              onBackToList={() => goToPage('services')}
            />
          )}

          {currentPage === 'services' && serviceSubId && activeServiceCategory && !activeServiceSub && !dataLoading && (
            <div className="py-20 px-4 text-center min-h-[50vh]">
              <p className="text-brand-text-muted mb-6">
                {locale === 'uz'
                  ? 'Muolaja topilmadi yoki o\'chirilgan.'
                  : locale === 'ru'
                    ? 'Процедура не найдена или была удалена.'
                    : 'Procedure not found or has been removed.'}
              </p>
              <button
                onClick={() => goToServiceCategory(activeServiceCategory.id)}
                className="px-5 py-2.5 bg-brand-gold text-white font-bold text-xs rounded-xl cursor-pointer mr-2"
              >
                {locale === 'uz' ? 'Kategoriyaga qaytish' : locale === 'ru' ? 'К категории' : 'Back to category'}
              </button>
            </div>
          )}

          {currentPage === 'services' && serviceCategoryId && !activeServiceCategory && !dataLoading && (
            <div className="py-20 px-4 text-center min-h-[50vh]">
              <p className="text-brand-text-muted mb-6">
                {locale === 'uz'
                  ? 'Xizmat topilmadi yoki o\'chirilgan.'
                  : locale === 'ru'
                    ? 'Услуга не найдена или была удалена.'
                    : 'Service not found or has been removed.'}
              </p>
              <button
                onClick={() => goToPage('services')}
                className="px-5 py-2.5 bg-brand-gold text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                {locale === 'uz' ? 'Xizmatlar ro\'yxatiga qaytish' : locale === 'ru' ? 'К списку услуг' : 'Back to services'}
              </button>
            </div>
          )}

          {currentPage === 'services' && !serviceCategoryId && (
            <Services 
              locale={locale} 
              onOpenAppointment={handleOpenAppointmentWithService} 
              onOpenCategory={goToServiceCategory}
              onOpenSubService={goToServiceSub}
              serviceCategories={dynamicServiceCategories}
              dictionary={d}
            />
          )}

          {currentPage === 'doctors' && doctorId && (
            <DoctorPage
              locale={locale}
              doctorId={doctorId}
              doctors={dynamicDoctors}
              dictionary={d}
              onBackToList={() => goToPage('doctors')}
              onOpenAppointment={() => handleOpenAppointmentWithService()}
            />
          )}

          {currentPage === 'doctors' && !doctorId && (
            <Doctors
              locale={locale}
              onOpenAppointment={() => handleOpenAppointmentWithService()}
              onOpenDoctor={goToDoctor}
              doctors={dynamicDoctors}
              dictionary={d}
            />
          )}

          {currentPage === 'prices' && (
            <Prices 
              locale={locale} 
              onOpenAppointment={handleOpenAppointmentWithService} 
              prices={dynamicPrices}
              dictionary={d}
            />
          )}

          {currentPage === 'articles' && articleId && (
            <ArticlePage
              locale={locale}
              articleId={articleId}
              articles={dynamicArticles}
              dictionary={d}
              onBackToList={() => goToPage('articles')}
              onOpenArticle={goToArticle}
              onViewsUpdate={updateArticleViews}
            />
          )}

          {currentPage === 'articles' && !articleId && (
            <Articles
              locale={locale}
              articles={dynamicArticles}
              dictionary={d}
            />
          )}

          {currentPage === 'admin' && (
            <AdminPanel
              locale={locale}
              dictionary={d}
              fullDictionary={dynamicDictionary}
              doctors={dynamicDoctors}
              serviceCategories={dynamicServiceCategories}
              prices={dynamicPrices}
              articles={dynamicArticles}
              clinicRatings={cmsClinicRatings}
              clinicVideos={cmsVideos}
              treatmentResults={cmsTreatmentResults}
              clinicPartners={cmsPartners}
              customerReviews={cmsReviews}
              onSaveLocalData={handleSaveLocalData}
              onResetLocalData={handleResetLocalData}
              onRefresh={refetchClinicData}
              onRefreshCms={refetchCms}
              onClose={() => goToPage('home')}
            />
          )}

          {currentPage === 'terms' && (
            <LegalPage locale={locale} type="terms" />
          )}

          {currentPage === 'privacy' && (
            <LegalPage locale={locale} type="privacy" />
          )}

          {currentPage === 'videos' && (
            <VideosPage locale={locale} dictionary={d} videos={cmsVideos} loading={cmsLoading} />
          )}

          {currentPage === 'branches' && (
            <BranchesPage
              locale={locale}
              dictionary={d}
              branches={cmsBranches}
              onOpenAppointment={() => handleOpenAppointmentWithService()}
            />
          )}

          {currentPage === 'qoqon' && (
            <KokandLandingPage locale={locale} appointmentLabel={d.appointmentBtn} />
          )}

          {currentPage === 'technologies' && (
            <TechnologiesPage locale={locale} />
          )}

          {currentPage === 'daavlin-foto-kabinalari' &&
            (legacyDaavlinModelRedirect ? (
              <Navigate to={legacyDaavlinModelRedirect} replace />
            ) : clinicLaserModelRedirect ? (
              <Navigate to={clinicLaserModelRedirect} replace />
            ) : daavlinModelId ? (
              <DaavlinModelPage locale={locale} modelId={daavlinModelId} />
            ) : daavlinSection !== 'about' && location.pathname.split('/').filter(Boolean)[2] !== 'models' ? (
              <Navigate to={pagePath(locale, 'daavlin-foto-kabinalari')} replace />
            ) : (
              <DaavlinFotoKabinalariPage locale={locale} />
            ))}
          {currentPage === 'dermoscan' && <DermoScanPage locale={locale} />}
          {currentPage === 'science' && <SciencePage locale={locale} />}
          {currentPage === 'obrazovaniya' && <ObrazovaniyaPage locale={locale} />}
          {currentPage === 'brend' && <BrandPage locale={locale} />}

          {currentPage === 'clinic-equipment' && (
            <ClinicEquipmentParkPage
              locale={locale}
              prices={dynamicPrices}
              serviceCategories={dynamicServiceCategories}
            />
          )}

          {currentPage === 'results' && (
            <ResultsPage
              locale={locale}
              dictionary={d}
              results={cmsTreatmentResults}
              loading={cmsLoading}
              onOpenAppointment={() => handleOpenAppointmentWithService()}
            />
          )}

        </motion.main>
      </AnimatePresence>

      {/* 3. Global Footer block */}
      {!isQrFeedbackPage && (
        <Footer
          locale={locale}
          onNavigate={goToPage}
          onOpenAppointment={() => handleOpenAppointmentWithService()}
          currentPage={currentPage}
        />
      )}

      {currentPage !== 'admin' && !isQrFeedbackPage && (
        <ClinicAiChat locale={locale} context={clinicAiContext} />
      )}

    </div>
  );
}
