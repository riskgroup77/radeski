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
  localeToHreflang,
  localeToOgLocale,
  LOCALES,
} from './routing/locale';
import {
  PageId,
  getPageFromPathname,
  getArticleIdFromPathname,
  getDoctorIdFromPathname,
  getServiceCategoryIdFromPathname,
  getServiceSubIdFromPathname,
  pagePath,
  absoluteUrl,
  switchLocaleInPath,
  pagePathForAllLocales,
  articlePath,
  doctorPath,
  serviceCategoryPath,
  serviceSubPath,
} from './routing/paths';
import { useAppNavigation } from './routing/useAppNavigation';
import { DICTIONARY, CLINIC_RATINGS, GALLERY_IMAGS } from './data';
import {
  loadClinicVideos,
  loadTreatmentResults,
  SITE_PAGES_STORAGE_KEYS,
} from './utils/sitePagesStorage';
import { clearAllLocalMedia } from './utils/localMediaStorage';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceCategoryPage from './components/ServiceCategoryPage';
import ServiceSubPage from './components/ServiceSubPage';
import Doctors from './components/Doctors';
import DoctorPage from './components/DoctorPage';
import VideosPage from './components/VideosPage';
import BranchesPage from './components/BranchesPage';
import ResultsPage from './components/ResultsPage';
import Prices from './components/Prices';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import LegalPage from './components/LegalPage';
import MediaImage from './components/MediaImage';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Phone, MapPin, Clock, ArrowRight, Star, HeartHandshake, CheckCircle2, RefreshCw, AlertCircle, ExternalLink } from 'lucide-react';
import { useClinicData } from './hooks/useClinicData';
import { createAppointment } from './api/publicApi';
import { ApiError } from './api/client';
import { findArticleByRouteParam } from './utils/articles';
import { openAppointmentBooking, APPOINTMENT_LINK_REL, APPOINTMENT_LINK_TARGET, resolveClinicRatingUrl } from './config/links';
import { getLocalizedImage } from './utils/localizedImage';
import ArticleViewsBadge from './components/ArticleViewsBadge';
import ClinicAiChat from './components/ClinicAiChat';
import { buildClinicAiContext } from './utils/clinicAiContext';
import { getFeaturedDoctors } from './utils/doctors';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/rus/*" element={<LocaleAliasRedirect locale="ru" />} />
        <Route path="/eng/*" element={<LocaleAliasRedirect locale="en" />} />
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
  const { goToPage, goToArticle, goToDoctor, goToServiceCategory, goToServiceSub, changeLocale: navigateLocale } = useAppNavigation(locale);
  const invalidLocale = Boolean(localeParam && !parsedLocale && !forcePage);

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

  const [dynamicClinicRatings, setDynamicClinicRatings] = useState(() => {
    const saved = localStorage.getItem('radeski_clinic_ratings_v1');
    return saved ? JSON.parse(saved) : CLINIC_RATINGS;
  });

  const [dynamicClinicVideos, setDynamicClinicVideos] = useState(() => loadClinicVideos());
  const [dynamicTreatmentResults, setDynamicTreatmentResults] = useState(() => loadTreatmentResults());

  const d = { ...DICTIONARY[locale], ...(dynamicDictionary[locale] || {}) };

  // Inline Consultation / Be Beautiful form states
  const [inlinePhone, setInlinePhone] = useState('');
  const [inlineSubmitted, setInlineSubmitted] = useState(false);
  const [inlineLoading, setInlineLoading] = useState(false);

  const handleSaveLocalData = (type: string, data: unknown) => {
    if (type === 'dictionary') {
      localStorage.setItem('radeski_dictionary_v1', JSON.stringify(data));
      setDynamicDictionary(data as typeof DICTIONARY);
    } else if (type === 'clinicRatings') {
      localStorage.setItem('radeski_clinic_ratings_v1', JSON.stringify(data));
      setDynamicClinicRatings(data as typeof CLINIC_RATINGS);
    } else if (type === 'clinicVideos') {
      localStorage.setItem(SITE_PAGES_STORAGE_KEYS.videos, JSON.stringify(data));
      setDynamicClinicVideos(data as ReturnType<typeof loadClinicVideos>);
    } else if (type === 'treatmentResults') {
      localStorage.setItem(SITE_PAGES_STORAGE_KEYS.results, JSON.stringify(data));
      setDynamicTreatmentResults(data as ReturnType<typeof loadTreatmentResults>);
    }
  };

  const handleResetLocalData = () => {
    localStorage.removeItem('radeski_dictionary_v1');
    localStorage.removeItem('radeski_clinic_ratings_v1');
    localStorage.removeItem(SITE_PAGES_STORAGE_KEYS.videos);
    localStorage.removeItem(SITE_PAGES_STORAGE_KEYS.results);
    void clearAllLocalMedia();
    setDynamicDictionary(DICTIONARY);
    setDynamicClinicRatings(CLINIC_RATINGS);
    setDynamicClinicVideos(loadClinicVideos());
    setDynamicTreatmentResults(loadTreatmentResults());
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
      "alternateName": "Radeski Skin Clinic",
      "url": "https://radeski.uz",
      "logo": `${window.location.origin}/gallery/logo.webp`,
      "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920",
      "telephone": "+998732007373",
      "priceRange": "$$",
      "medicalSpecialty": ["Dermatology", "Cosmetology", "Oncology"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "O'zbekiston Ovozi ko'chasi, 1A-bino",
        "addressLocality": "Fergana",
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
      }
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

    // 6. Extensive route-based tab and locale SEO optimizations
    const TAB_SEO: Record<string, Record<string, { title: string; desc: string; keywords: string }>> = {
      uz: {
        home: {
          title: "Radeski Skin & Aesthetic Clinic",
          desc: "Radeski dermatologiya va estetika klinikasi Farg'onada PhotoFinder, IPL va Mohs mikrografik jarrohligi kabi zamonaviy usullar va malakali tibbiyot xodimlari bilan xizmat ko'rsatadi.",
          keywords: "Radeski, dermatologiya, kosmetologiya Farg'ona, PhotoFinder, botoks, BroadBand Light, IPL, lazer epilyatsiyasi, Mohs operatsiyasi, psoriaz, o'sma"
        },
        about: {
          title: "Muntazam Litsenziyalangan Shifokorlar & Akkreditatsiya | Radeski Clinic",
          desc: "Klinika tarixi, akkreditatsiyalarimiz, shifokorlarimizning litsenziya va ilmiy ko'rsatkichlari. Germaniya, Italiya va AQShning eng so'nggi va xavfsiz apparat va texnologiyalari.",
          keywords: "Klinika haqida, Radeski tarixi, shifokor litsenziyalari, tibbiy akkreditatsiya, steril xona, tibbiy amaliyot yillari"
        },
        services: {
          title: "12 ta Tibbiy Xizmatlar & Dermato-Onkologiya | Radeski Clinic",
          desc: "Klinikamizda 12 ta ixtisoslashgan dermatologiya, kosmetologiya, dermato-onkologiya, trixologiya va mikrografik jarrohlik yo'nalishlarida samarali xizmatlar taqdim etiladi.",
          keywords: "Dermatologiya xizmatlari, kosmetologik muolajalar, botoks inyeksiyalari, plazmoterapiya, akne davolash, PhotoFinder xaritasi"
        },
        doctors: {
          title: "Malakali Mutaxassislar & Shifokorlar Reestri | Radeski Clinic",
          desc: "Ashurov Dilshod Davlatovich boshchiligidagi malakali dermatovenerolog, dermatoonkolog, kosmetolog va lazer terapevtlari shifokorlik reestri va ularning tajribasi.",
          keywords: "Radeski shifokorlari, Ashurov Dilshod, Kodirova Dilafruzxon, dermatolog Farg'ona, trixolog, dermatoonkolog, tajribali shifokorlar"
        },
        prices: {
          title: "Shaffof Xizmatlar Narxlari (Preyskurant) | Radeski Clinic",
          desc: "Radeski klinikasidagi dermatologik konsultatsiyalar, IPL Forever Young, biopsiya va barcha dermatologik muolajalarning shaffof va qulay narxlari.",
          keywords: "Dermatolog narxi, kosmetologiya narxlari, IPL narxi Farg'ona, botoks narxlari, xizmat preyskuranti, maslahat narxi"
        },
        articles: {
          title: "Teri Sog'lig'i Tavsiyalari, Psoriaz & Tibbiy Maqolalar | Radeski Clinic",
          desc: "Teri parvarishi, akne, psoriaz, o'smalarni erta aniqlash va teri sog'ligini saqlash bo'yicha shifokorlarimiz tomonidan yozilgan ilmiy va ommabop maqolalar.",
          keywords: "Tibbiy maqolalar, teri parvarishi, akne davolash maslahatlari, psoriazni nazorat qilish, trixologiya maqolalari"
        },
        contacts: {
          title: "Rasmiy Manzil, Google Xarita & Aloqa Telefoni | Radeski Clinic",
          desc: "Farg'ona shahri, O'zbekiston Ovozi ko'chasi 1A. Telefon: +998 (73) 200-73-73. Klinikaga qulay yo'nalish xaritasi va ish vaqti.",
          keywords: "Radeski kontakti, Farg'ona dermatologiya telefoni, klinika manzili, ish vaqti, elektron pochta, Google xarita"
        },
        videos: {
          title: "Klinika Videolari & Tibbiy Xizmatlar | Radeski Clinic",
          desc: "Radeski klinikasidagi PhotoFinder, IPL terapiya va zamonaviy dermatologiya xizmatlari haqida video materiallar.",
          keywords: "Radeski video, dermatologiya videosi, IPL terapiya, PhotoFinder, klinika tanishuv"
        },
        branches: {
          title: "Filiallar va Qabul Punktlari | Radeski Clinic",
          desc: "Farg'ona, Marg'ilon va Qo'qondagi Radeski klinikasi filiallari manzili, telefon va ish vaqti.",
          keywords: "Radeski filiallar, Farg'ona klinika, Marg'ilon dermatolog, Qo'qon laboratoriya"
        },
        results: {
          title: "Davolash Natijalari — Oldin va Keyin | Radeski Clinic",
          desc: "Akne, pigmentatsiya, kuperoz va trixologiya bo'yicha Radeski klinikasi davolash natijalari galereyasi.",
          keywords: "davolash natijalari, oldin keyin, akne natija, IPL natija, teri davolash"
        },
        terms: {
          title: "Foydalanish shartlari | Radeski Skin & Aesthetic Clinic",
          desc: "Radeski klinikasi veb-saytidan foydalanish qoidalari, foydalanuvchi huquqlari va majburiyatlari, onlayn qabul va intellektual mulk bo'yicha shartlar.",
          keywords: "Foydalanish shartlari, Radeski, veb-sayt qoidalari, foydalanuvchi shartnomasi"
        },
        privacy: {
          title: "Maxfiylik siyosati | Radeski Skin & Aesthetic Clinic",
          desc: "Shaxsiy ma'lumotlaringizni qanday to'plash, saqlash va himoya qilishimiz haqida Radeski klinikasi maxfiylik siyosati.",
          keywords: "Maxfiylik siyosati, shaxsiy ma'lumotlar, Radeski, ma'lumotlarni himoya qilish"
        }
      },
      ru: {
        home: {
          title: "Главная - Ключ к здоровой и красивой коже | Radeski Skin & Aesthetic Clinic",
          desc: "Клиника дерматологии и эстетики Radeski предоставляет высокоэффективные услуги в Фергане, используя современное немецкое оборудование PhotoFinder, IPL системы и Mohs хирургию.",
          keywords: "Радески, дерматолог Фергана, косметология, лазерная эпиляция, ботокс Фергана, PhotoFinder диагностика, витилиго, операции Моса"
        },
        about: {
          title: "О клинике, Аккредитация & Лицензии Врачей | Radeski Clinic",
          desc: "История клиники Radeski, аккредитация и лицензии. Сведения об образовании, научных трудах и практике наших дерматоонкологов и специалистов.",
          keywords: "О клинике Радески, лицензия врача, аккредитация клиники, стерилизация инструментов, отзывы пациентов"
        },
        services: {
          title: "12 Медицинских Направлений & Лечение Кожи | Radeski Clinic",
          desc: "Всесторонние услуги в сфере клинической дерматовенерологии, эстетической косметологии, трихологии, дерматоонкологии и хирургии кожи по методике Mohs в Фергане.",
          keywords: "Услуги косметолога, дерматология цены, удаление родинок, трихоскопия волос, фотоомоложение кожи лица, IPL"
        },
        doctors: {
          title: "Наши Врачи, Научные Степни & Биографии | Radeski Clinic",
          desc: "Познакомьтесь с командой врачей во главе с Ашуровым Дильшодом Давлатовичем. Профессиональные биографии, стажировки в Германии и РФ, практика.",
          keywords: "Врачи дерматологи Фергана, Ашуров Дильшод, Кодирова Дилафрузхон, трихолог, онкодерматолог, резюме врача"
        },
        prices: {
          title: "Цены на Услуги и Процедуры (Прейскурант) | Radeski Clinic",
          desc: "Прозрачный прейскурант медицинских и косметологических процедур в нашей клинике. Стоимость консультаций специалистов, инъекций и аппаратной терапии.",
          keywords: "Сделать IPL цена, сколько стоит ботокс в Фергане, прейскурант клиники, консультация дерматолога цена"
        },
        articles: {
          title: "Медицинский Блог, Советы по Уходу & Статьи | Radeski Clinic",
          desc: "Научно-популярные статьи и практические рекомендации от наших практикующих врачей по дерматологии, уходу за проблемной кожей и трихологии.",
          keywords: "Полезные статьи о коже, как лечить акне, уход за сухой кожей, советы трихолога, профилактика меланомы"
        },
        contacts: {
          title: "Адрес, Контакты & Онлайн Карта Проезда | Radeski Clinic",
          desc: "Адрес клиники: г. Фергана, ул. Узбекистон Овози, 1А. Телефон регистратуры: +998 (73) 200-73-73. Схема проезда на интерактивной карте, часы работы.",
          keywords: "Контакты Радески, телефон клиники Фергана, адрес дерматологии, режим работы регистратуры, обратный звонок"
        },
        videos: {
          title: "Видео о клинике и процедурах | Radeski Clinic",
          desc: "Видеоматериалы о PhotoFinder, IPL-терапии и современных дерматологических услугах клиники Radeski.",
          keywords: "видео Radeski, дерматология видео, IPL терапия, PhotoFinder, о клинике"
        },
        branches: {
          title: "Филиалы и пункты приёма | Radeski Clinic",
          desc: "Филиалы Radeski в Фергане, Маргилане и Коканде — адрес, телефон и график работы.",
          keywords: "филиалы Radeski, клиника Фергана, дерматолог Маргилан, лаборатория Коканд"
        },
        results: {
          title: "Результаты лечения — до и после | Radeski Clinic",
          desc: "Галерея результатов лечения акне, пигментации, купероза и трихологии в клинике Radeski.",
          keywords: "результаты лечения, до и после, акне результат, IPL результат"
        },
        terms: {
          title: "Пользовательское соглашение | Radeski Skin & Aesthetic Clinic",
          desc: "Правила использования официального сайта Radeski: права и обязанности пользователей, онлайн-запись и интеллектуальная собственность.",
          keywords: "Пользовательское соглашение, Радески, правила сайта, условия использования"
        },
        privacy: {
          title: "Политика конфиденциальности | Radeski Skin & Aesthetic Clinic",
          desc: "Как клиника Radeski собирает, хранит и защищает ваши персональные данные при использовании сайта radeski.uz.",
          keywords: "Политика конфиденциальности, персональные данные, Радески, защита информации"
        }
      },
      en: {
        home: {
          title: "Home - The Key to Healthy and Beautiful Skin | Radeski Skin & Aesthetic Clinic",
          desc: "Radeski Dermatology and Aesthetic Clinic serves the Fergana Valley with medical expertise and state-of-the-art diagnostic IPL and German PhotoFinder mole mapping.",
          keywords: "Radeski clinic, dermatologist Fergana, aesthetic skincare, laser hair removal, Botox, Sciton IPL, Mohs surgery, mole check"
        },
        about: {
          title: "About Us, Clinical Credentials & Degrees | Radeski Clinic",
          desc: "Learn about Radeski Clinic's history, active clinical registrations, certifications, and medical licensing indicators of our primary physicians.",
          keywords: "About Radeski, clinical licensing, medical accreditation, sterilization box, customer ratings, physician qualifications"
        },
        services: {
          title: "Our 12 Clinical Services & Therapy Segments | Radeski Clinic",
          desc: "Explore our 12 specialized clinical departments covering clinical dermatology, non-invasive hardware cosmetology, injectables, hair treatment, and biopsies.",
          keywords: "Dermatological services, acne removal, injectable solutions, IPL laser, clinical trichology, skin pathology"
        },
        doctors: {
          title: "Our Specialists, Physicians & Surgeons Registry | Radeski",
          desc: "Our medical crew is headed by Dr. Dilshod Davlatovich Ashurov. Internationally certified, peer-reviewed researchers and expert surgeons.",
          keywords: "Dermatologists profiles, Dr. Dilshod Ashurov, Dr. Dilafruz Kodirova, trichologist profile, oncodermatologist, medical staff"
        },
        prices: {
          title: "Service Fee Guide & Cost Estimator (Pricelist) | Radeski Clinic",
          desc: "Transparent price schedule for dermatological checkups, Sciton IPL sessions, Mohs surgeries, trichoscopy, and specialized aesthetic procedures.",
          keywords: "Dermatologist fee, facial IPL price, Botox cost in Fergana, biopsy pricing, clinic rates, service fees"
        },
        articles: {
          title: "Skin Advice, Pathology Blogs & Board Articles | Radeski Clinic",
          desc: "Professional health advises and skin care guidelines authored by our clinical team concerning acne, psoriasis, aging defense, and trichology.",
          keywords: "Medical articles, dermatology blog, psoriasis management, skin moisture tips, hair care guidelines"
        },
        contacts: {
          title: "Office Location, Support Hotline & Contact Address | Radeski",
          desc: "Located at 1A Uzbekiston Ovozi Street, Fergana. Dedicated helpline: +998 (73) 200-73-73. Dynamic route map and convenient clinic working hours.",
          keywords: "Radeski phone, dermatology contact, clinic location Fergana, map routing, request callback, email support"
        },
        videos: {
          title: "Clinic Videos & Procedures | Radeski Clinic",
          desc: "Video tours of PhotoFinder, IPL therapy, and modern dermatology services at Radeski Clinic.",
          keywords: "Radeski videos, dermatology video, IPL therapy, PhotoFinder, clinic tour"
        },
        branches: {
          title: "Branches & Consultation Points | Radeski Clinic",
          desc: "Radeski branches in Fergana, Margilan, and Kokand — address, phone, and opening hours.",
          keywords: "Radeski branches, Fergana clinic, Margilan dermatology, Kokand lab"
        },
        results: {
          title: "Treatment Results — Before & After | Radeski Clinic",
          desc: "Gallery of acne, pigmentation, rosacea, and trichology treatment outcomes at Radeski Clinic.",
          keywords: "treatment results, before after, acne results, IPL outcomes"
        },
        terms: {
          title: "Terms of Use | Radeski Skin & Aesthetic Clinic",
          desc: "Rules for using the Radeski clinic website, including user obligations, online appointments, and intellectual property terms.",
          keywords: "Terms of use, Radeski, website rules, user agreement"
        },
        privacy: {
          title: "Privacy Policy | Radeski Skin & Aesthetic Clinic",
          desc: "How Radeski Skin & Aesthetic Clinic collects, stores, and protects your personal data when you use radeski.uz.",
          keywords: "Privacy policy, personal data, Radeski, data protection"
        }
      }
    };

    const activeSEO = (TAB_SEO[locale] && TAB_SEO[locale][currentPage])
      || (TAB_SEO['uz'] && TAB_SEO['uz']['home']);

    const seoTitle = activeArticlePreview
      ? `${activeArticlePreview.title[locale]} | Radeski Clinic`
      : activeDoctorPreview
        ? `${activeDoctorPreview.name[locale]} | Radeski Clinic`
        : activeServiceSub
          ? `${activeServiceSub.name[locale]} | Radeski Clinic`
          : activeServiceCategory
            ? `${activeServiceCategory.title[locale]} | Radeski Clinic`
            : activeSEO.title;
    const seoDesc = activeArticlePreview
      ? activeArticlePreview.summary[locale]
      : activeDoctorPreview
        ? activeDoctorPreview.bio[locale]
        : activeServiceSub
          ? activeServiceSub.description[locale]
          : activeServiceCategory
            ? activeServiceCategory.description[locale]
            : activeSEO.desc;

    document.title = seoTitle;

    // Update document language
    document.documentElement.lang = locale;

    const canonicalPath = forcePage === 'admin' ? '/admin' : location.pathname;
    const canonicalUrl = absoluteUrl(canonicalPath);

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

    // Update main Search Engine optimization tags
    updateMeta('description', seoDesc);
    updateMeta('keywords', activeSEO.keywords);

    // Update Social sharing graph protocols
    updateOg('og:title', seoTitle);
    updateOg('og:description', seoDesc);
    updateOg('og:url', canonicalUrl);
    updateOg('og:locale', localeToOgLocale(locale));

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    document.querySelectorAll('link[data-radeski-hreflang]').forEach((node) => node.remove());

    if (forcePage !== 'admin') {
      const pageForAlternates: PageId = currentPage === 'articles' && articleId ? 'articles' : currentPage;
      LOCALES.forEach((altLocale) => {
        const altPath = articleId
          ? articlePath(altLocale, activeArticlePreview?.id ?? articleId)
          : doctorId
            ? doctorPath(altLocale, activeDoctorPreview?.id ?? doctorId)
            : serviceSubId && serviceCategoryId
              ? serviceSubPath(altLocale, serviceCategoryId, activeServiceSub?.id ?? serviceSubId)
              : serviceCategoryId
                ? serviceCategoryPath(altLocale, serviceCategoryId)
                : pagePathForAllLocales(pageForAlternates)[altLocale];
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = localeToHreflang(altLocale);
        link.href = absoluteUrl(altPath);
        link.setAttribute('data-radeski-hreflang', 'true');
        document.head.appendChild(link);
      });

      const defaultPath = articleId
        ? articlePath('uz', activeArticlePreview?.id ?? articleId)
        : doctorId
          ? doctorPath('uz', activeDoctorPreview?.id ?? doctorId)
          : serviceSubId && serviceCategoryId
            ? serviceSubPath('uz', serviceCategoryId, activeServiceSub?.id ?? serviceSubId)
            : serviceCategoryId
              ? serviceCategoryPath('uz', serviceCategoryId)
              : pagePath('uz', pageForAlternates);
      const defaultLink = document.createElement('link');
      defaultLink.rel = 'alternate';
      defaultLink.hreflang = 'x-default';
      defaultLink.href = absoluteUrl(defaultPath);
      defaultLink.setAttribute('data-radeski-hreflang', 'true');
      document.head.appendChild(defaultLink);
    }

  }, [locale, currentPage, dynamicServiceCategories, dynamicArticles, dynamicDoctors, location.pathname, articleId, doctorId, activeArticlePreview, activeDoctorPreview, serviceCategoryId, serviceSubId, activeServiceCategory, activeServiceSub, forcePage]);

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

  const featuredHomeDoctors = useMemo(
    () => getFeaturedDoctors(dynamicDoctors),
    [dynamicDoctors],
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

  if (invalidLocale) {
    return (
      <Navigate
        to={switchLocaleInPath(location.pathname, getPreferredLocale())}
        replace
      />
    );
  }

  return (
    <div className="bg-brand-white min-h-screen text-brand-text-primary antialiased selection:bg-brand-gold selection:text-white pt-[96px] sm:pt-[136px]">

      {dataError && currentPage !== 'admin' && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
          <div className="site-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-2 text-sm text-amber-900">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{dataError}</span>
            </div>
            <button
              onClick={() => refetchClinicData()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold rounded-lg cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              {locale === 'uz' ? 'Qayta yuklash' : locale === 'ru' ? 'Повторить' : 'Retry'}
            </button>
          </div>
        </div>
      )}

      {dataLoading && currentPage !== 'admin' && (
        <div className="fixed inset-0 z-30 bg-white/60 backdrop-blur-[1px] flex items-center justify-center pointer-events-none">
          <div className="px-4 py-2 bg-white border border-brand-sectiongray rounded-xl shadow-sm text-sm text-brand-text-muted">
            {locale === 'uz' ? 'Ma\'lumotlar yuklanmoqda...' : locale === 'ru' ? 'Загрузка данных...' : 'Loading data...'}
          </div>
        </div>
      )}

      {/* 1. Header Navigation */}
      <Header
        currentPage={currentPage}
        locale={locale}
        onNavigate={goToPage}
        onChangeLocale={changeLocale}
        onOpenAppointment={() => handleOpenAppointmentWithService()}
      />

      {/* 2. Main Page Renderings based on current routing Tab */}
      <AnimatePresence mode="wait">
        <motion.main
          key={`${currentPage}-${articleId ?? ''}-${doctorId ?? ''}-${serviceCategoryId ?? ''}-${serviceSubId ?? ''}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {currentPage === 'home' && (
            <div id="home-dashboard">
              {/* Hero Slider banner */}
              <Hero
                locale={locale}
                onOpenAppointment={() => handleOpenAppointmentWithService()}
                onNavigate={goToPage}
              />

              {/* Bento Grid Features / Advantages */}
              <section id="advantages-section" className="py-16 bg-brand-white border-b border-brand-offwhite">
                <div className="site-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="flex gap-4 items-start p-5 bg-brand-offwhite rounded-2xl border border-brand-sectiongray shadow-xs">
                    <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold border border-brand-gold-light/20 shrink-0">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text-primary text-sm sm:text-base">{d.features01}</h4>
                      <p className="text-xs text-brand-text-muted mt-1 leading-normal font-light">{d.features01Desc}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-brand-offwhite rounded-2xl border border-brand-sectiongray shadow-xs">
                    <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold border border-brand-gold-light/20 shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text-primary text-sm sm:text-base">{d.features02}</h4>
                      <p className="text-xs text-brand-text-muted mt-1 leading-normal font-light">{d.features02Desc}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-brand-offwhite rounded-2xl border border-brand-sectiongray shadow-xs">
                    <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold border border-brand-gold-light/20 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text-primary text-sm sm:text-base">{d.features03}</h4>
                      <p className="text-xs text-brand-text-muted mt-1 leading-normal font-light">{d.features03Desc}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-brand-offwhite rounded-2xl border border-brand-sectiongray shadow-xs">
                    <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold border border-brand-gold-light/20 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text-primary text-sm sm:text-base">{d.features04}</h4>
                      <p className="text-xs text-brand-text-muted mt-1 leading-normal font-light">{d.features04Desc}</p>
                    </div>
                  </div>
                </div>
              </section>

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
                    {dynamicServiceCategories.slice(0, 6).map(category => (
                      <div
                        key={category.id}
                        className="bg-brand-white border border-brand-sectiongray rounded-2xl sm:rounded-3xl shadow-xs hover:shadow-lg transition-all flex flex-col overflow-hidden h-full group"
                      >
                        {(() => {
                          const catImage = getLocalizedImage(category.images, locale) ?? category.image;
                          return catImage ? (
                          <div className="relative aspect-[16/11] sm:aspect-[5/3] min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] overflow-hidden bg-brand-offwhite">
                            <MediaImage
                              src={catImage}
                              alt={category.title[locale]}
                              loading="lazy"
                              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                            />
                          </div>
                        ) : null;
                        })()}
                        <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1 justify-between">
                          <div>
                            <button
                              type="button"
                              onClick={() => goToServiceCategory(category.id)}
                              className="text-left w-full font-extrabold text-brand-text-primary text-lg sm:text-xl leading-snug hover:text-brand-gold transition-colors cursor-pointer"
                            >
                              {category.title[locale]}
                            </button>
                            <p className="mt-3 text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed line-clamp-4">
                              {category.description[locale]}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => goToServiceCategory(category.id)}
                            className="mt-6 text-xs sm:text-sm text-brand-gold hover:text-brand-gold-dark font-bold text-left inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>{d.viewDetails}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredHomeDoctors.map(doc => (
                      <div
                        key={doc.id}
                        className="bg-brand-white rounded-xl border border-brand-sectiongray overflow-hidden shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
                      >
                        <div className="relative aspect-[3/4] overflow-hidden bg-brand-offwhite">
                          {doc.photo ? (
                            <MediaImage
                              src={doc.photo}
                              alt={doc.name[locale]}
                              className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-brand-text-muted text-xs">—</div>
                          )}
                          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-dark-navy/50 to-transparent pointer-events-none" />
                          <span className="absolute bottom-3 left-3 bg-brand-gold text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">{doc.experience[locale]} {locale === 'uz' ? "yil tajriba" : locale === 'ru' ? "лет практики" : "years practice"}</span>
                        </div>
                        <div className="p-5">
                          <span className="text-[10px] font-bold text-brand-gold tracking-wide uppercase font-mono">{doc.role[locale]}</span>
                          <button
                            type="button"
                            onClick={() => goToDoctor(doc.id)}
                            className="text-left w-full font-extrabold text-brand-text-primary text-md sm:text-base tracking-tight leading-snug mt-1 hover:text-brand-gold transition-colors cursor-pointer"
                          >
                            {doc.name[locale]}
                          </button>
                          {doc.education[locale] && (
                            <div className="mt-2">
                              <span className="text-xs font-extrabold text-brand-text-primary uppercase tracking-wide">
                                {d.education}
                              </span>
                              <p className="text-sm mt-1 font-semibold text-brand-text-primary line-clamp-2 leading-relaxed">
                                {doc.education[locale]}
                              </p>
                            </div>
                          )}
                          <p className="text-xs text-brand-text-muted mt-2 line-clamp-2 leading-relaxed font-light">{doc.bio[locale]}</p>
                          <button
                            type="button"
                            onClick={() => goToDoctor(doc.id)}
                            className="mt-4 py-2.5 w-full text-center bg-brand-gold-light/10 hover:bg-brand-gold-light/20 text-brand-gold-dark font-bold text-xs rounded-lg transition-colors cursor-pointer"
                          >
                            {d.viewProfile}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
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
                    <form onSubmit={handleInlineSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                      <input
                        id="inline-phone-input"
                        type="tel"
                        required
                        value={inlinePhone}
                        onChange={(e) => setInlinePhone(e.target.value)}
                        placeholder="+998 (__) ___-__-__"
                        className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/20 focus:bg-white font-medium focus:border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/25 text-white focus:text-brand-text-primary transition-all text-sm placeholder-slate-400"
                      />
                      <button
                        id="inline-submit-btn"
                        type="submit"
                        disabled={inlineLoading}
                        className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-extrabold text-sm rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-gold/10"
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
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary tracking-tight mt-1 mb-8">
                    {locale === 'uz' ? "Insonlar nega aynan bizni tanlashadi?" : locale === 'ru' ? "Почему пациенты доверяют именно нам?" : "What supports our clinical trust?"}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dynamicClinicRatings.map((plat) => {
                      const reviewUrl = resolveClinicRatingUrl(plat.platform, plat.url);
                      const cardClassName =
                        'bg-brand-white rounded-2xl p-6 border border-brand-sectiongray text-left flex items-start gap-4 shadow-xs transition-all';
                      const cardContent = (
                        <>
                          <div className="w-12 h-12 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-xl shadow-xs shrink-0">
                            {plat.logo}
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
                            {reviewUrl ? (
                              <p className="text-[11px] font-semibold text-brand-gold mt-2">
                                {locale === 'uz'
                                  ? "Sharhlarni ko'rish"
                                  : locale === 'ru'
                                    ? 'Читать отзывы'
                                    : 'View reviews'}
                              </p>
                            ) : null}
                          </div>
                        </>
                      );

                      return reviewUrl ? (
                        <a
                          key={plat.platform}
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
                        <div key={plat.platform} className={cardClassName}>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dynamicArticles.slice(0, 3).map(art => (
                      <Link
                        key={art.id}
                        to={articlePath(locale, art.id)}
                        className="bg-brand-white rounded-xl border border-brand-sectiongray overflow-hidden shadow-xs hover:shadow-sm transition-all flex flex-col justify-between group cursor-pointer"
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
                          <span className="text-[10px] text-brand-text-muted font-light font-mono block mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span>{art.date}</span>
                            <ArticleViewsBadge views={art.views} locale={locale} className="text-[10px]" />
                          </span>
                          <h4 className="font-extrabold text-brand-text-primary text-sm sm:text-base leading-snug group-hover:text-brand-gold transition-colors leading-tight line-clamp-2">{art.title[locale]}</h4>
                          <p className="text-xs text-brand-text-muted mt-2 line-clamp-2 leading-relaxed font-light">{art.summary[locale]}</p>
                          <span className="mt-4 inline-block text-xs font-bold text-brand-gold flex items-center gap-0.5">
                            {d.readMore} <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

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
              dictionary={d}
              onBackToCategory={() => goToServiceCategory(activeServiceCategory.id)}
              onBackToList={() => goToPage('services')}
            />
          )}

          {currentPage === 'services' && activeServiceCategory && !activeServiceSub && !serviceSubId && (
            <ServiceCategoryPage
              locale={locale}
              category={activeServiceCategory}
              dictionary={d}
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
              clinicRatings={dynamicClinicRatings}
              clinicVideos={dynamicClinicVideos}
              treatmentResults={dynamicTreatmentResults}
              onSaveLocalData={handleSaveLocalData}
              onResetLocalData={handleResetLocalData}
              onRefresh={refetchClinicData}
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
            <VideosPage locale={locale} dictionary={d} videos={dynamicClinicVideos} />
          )}

          {currentPage === 'branches' && (
            <BranchesPage
              locale={locale}
              dictionary={d}
              onOpenAppointment={() => handleOpenAppointmentWithService()}
            />
          )}

          {currentPage === 'results' && (
            <ResultsPage
              locale={locale}
              dictionary={d}
              results={dynamicTreatmentResults}
              onOpenAppointment={() => handleOpenAppointmentWithService()}
            />
          )}

          {currentPage === 'contacts' && (
            <div id="contacts-page" className="py-16 bg-brand-offwhite min-h-screen">
              <div className="site-container">
                {/* Contact title header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
                    {d.navContacts}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-3">
                    {locale === 'uz' ? "Biz bilan bog'laning" : locale === 'ru' ? "Свяжитесь с нами" : "Get In Touch With Us"}
                  </h2>
                  <p className="text-brand-text-muted mt-4 text-sm sm:text-base pr-3 pl-3">
                    {locale === 'uz' ? "Klinikamiz manzili, telefon raqamlari yoki mutaxassislar xizmatiga oid barcha savollar bo'yicha biz bilan bevosita bog'laning." : 
                     locale === 'ru' ? "Не стесняйтесь обращаться к нам по поводу стоимости процедур, графика врачей или адреса нашего центра." : 
                                       "Do not hesitate to reach out to our administration desk regarding medical procedures, fee schedules, or slots."}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left contact card index */}
                  <div className="bg-brand-white rounded-2xl border border-brand-sectiongray p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex gap-4 items-start pb-5 border-b border-brand-sectiongray">
                        <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold border border-brand-gold-light/20 shrink-0 mt-0.5">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-text-primary text-sm sm:text-base mb-1">{d.addressTitle}</h4>
                          <p className="text-brand-text-secondary text-xs sm:text-sm font-light leading-normal">{d.addressValue}</p>
                          <span className="text-[10px] font-bold text-brand-gold tracking-tight mt-1.5 block uppercase font-mono">{locale === 'uz' ? "Yagona manzil: O'zbekiston Ovozi 1A" : "Единый адрес: Узбекистон Овози 1А"}</span>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start pb-5 border-b border-brand-sectiongray">
                        <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold border border-brand-gold-light/20 shrink-0 mt-0.5">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-text-primary text-sm sm:text-base mb-1">{d.phoneTitle}</h4>
                          <a href="tel:+998732007373" className="text-brand-text-primary text-xs sm:text-sm font-semibold hover:text-brand-gold-dark transition-colors font-mono">
                            +998 (73) 200-73-73
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold border border-brand-gold-light/20 shrink-0 mt-0.5">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-text-primary text-sm sm:text-base mb-1">{d.workingHoursTitle}</h4>
                          <p className="text-brand-text-secondary text-xs sm:text-sm font-light leading-normal">{d.workingHoursValue}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-brand-sectiongray">
                      <button
                        onClick={() => handleOpenAppointmentWithService()}
                        className="w-full py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md text-center"
                      >
                        {d.appointmentBtn}
                      </button>
                    </div>
                  </div>

                  {/* Right big xarita maps col */}
                  <div className="bg-brand-white rounded-2xl border border-brand-sectiongray p-4 shadow-sm h-[320px] sm:h-auto overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0022026857106!2d71.7864115!3d40.3864115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83461413146b%3A0xe5aef1cb446faab4!2zNSwgTyd6YmVraXN0b24gT3Zvemkga28nY2hhc2ksIEZhcmdvbmEsIE96YmVraXN0YW4!5e0!3m2!1sen!2s!4v1718300000000!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, borderRadius: '0.75rem' }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      id="contacts-route-map"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.main>
      </AnimatePresence>

      {/* 3. Global Footer block */}
      <Footer
        locale={locale}
        onNavigate={goToPage}
        onOpenAppointment={() => handleOpenAppointmentWithService()}
        currentPage={currentPage}
      />

      {currentPage !== 'admin' && (
        <ClinicAiChat locale={locale} context={clinicAiContext} />
      )}

    </div>
  );
}
