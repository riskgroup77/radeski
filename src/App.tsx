/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * dkbkdsbc
 * hdkbscdbki
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
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
  getArticleSlugFromPathname,
  pagePath,
  absoluteUrl,
  switchLocaleInPath,
  pagePathForAllLocales,
  articlePath,
} from './routing/paths';
import { useAppNavigation } from './routing/useAppNavigation';
import { DICTIONARY, CLINIC_RATINGS, GALLERY_IMAGS } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Prices from './components/Prices';
import Articles from './components/Articles';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import LegalPage from './components/LegalPage';
import AppointmentModal from './components/AppointmentModal';
import MediaImage from './components/MediaImage';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Phone, MapPin, Clock, ArrowRight, Star, HeartHandshake, CheckCircle2, RefreshCw, AlertCircle } from 'lucide-react';
import { useClinicData } from './hooks/useClinicData';
import { createAppointment } from './api/publicApi';
import { ApiError } from './api/client';

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
  const articleSlug = getArticleSlugFromPathname(location.pathname);
  const { goToPage, goToArticle, changeLocale: navigateLocale } = useAppNavigation(locale);
  const invalidLocale = Boolean(localeParam && !parsedLocale && !forcePage);

  const changeLocale = (nextLocale: Locale) => {
    saveLocale(nextLocale);
    if (forcePage === 'admin') {
      setAdminLocale(nextLocale);
      return;
    }
    navigateLocale(nextLocale);
  };

  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('');

  const {
    doctors: dynamicDoctors,
    serviceCategories: dynamicServiceCategories,
    prices: dynamicPrices,
    articles: dynamicArticles,
    loading: dataLoading,
    error: dataError,
    refetch: refetchClinicData,
  } = useClinicData();

  const [dynamicDictionary, setDynamicDictionary] = useState(() => {
    const saved = localStorage.getItem('radeski_dictionary_v1');
    return saved ? JSON.parse(saved) : DICTIONARY;
  });

  const [dynamicClinicRatings, setDynamicClinicRatings] = useState(() => {
    const saved = localStorage.getItem('radeski_clinic_ratings_v1');
    return saved ? JSON.parse(saved) : CLINIC_RATINGS;
  });

  const d = dynamicDictionary[locale] || DICTIONARY[locale];

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
    }
  };

  const handleResetLocalData = () => {
    localStorage.removeItem('radeski_dictionary_v1');
    localStorage.removeItem('radeski_clinic_ratings_v1');
    setDynamicDictionary(DICTIONARY);
    setDynamicClinicRatings(CLINIC_RATINGS);
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
          desc: "Radeski dermatologiya va estetika klinikasi Farg'onada PhotoFinder, BBL va Mohs mikrografik jarrohligi kabi zamonaviy usullar va malakali tibbiyot xodimlari bilan xizmat ko'rsatadi.",
          keywords: "Radeski, dermatologiya, kosmetologiya Farg'ona, PhotoFinder, botoks, BroadBand Light, BBL, lazer epilyatsiyasi, Mohs operatsiyasi, psoriaz, o'sma"
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
          desc: "Radeski klinikasidagi dermatologik konsultatsiyalar, BBL Forever Young, biopsiya va barcha dermatologik muolajalarning shaffof va qulay narxlari.",
          keywords: "Dermatolog narxi, kosmetologiya narxlari, BBL narxi Farg'ona, botoks narxlari, xizmat preyskuranti, maslahat narxi"
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
          desc: "Клиника дерматологии и эстетики Radeski предоставляет высокоэффективные услуги в Фергане, используя современное немецкое оборудование PhotoFinder, BBL системы и Mohs хирургию.",
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
          keywords: "Услуги косметолога, дерматология цены, удаление родинок, трихоскопия волос, фотоомоложение кожи лица, BBL"
        },
        doctors: {
          title: "Наши Врачи, Научные Степни & Биографии | Radeski Clinic",
          desc: "Познакомьтесь с командой врачей во главе с Ашуровым Дильшодом Давлатовичем. Профессиональные биографии, стажировки в Германии и РФ, практика.",
          keywords: "Врачи дерматологи Фергана, Ашуров Дильшод, Кодирова Дилафрузхон, трихолог, онкодерматолог, резюме врача"
        },
        prices: {
          title: "Цены на Услуги и Процедуры (Прейскурант) | Radeski Clinic",
          desc: "Прозрачный прейскурант медицинских и косметологических процедур в нашей клинике. Стоимость консультаций специалистов, инъекций и аппаратной терапии.",
          keywords: "Сделать BBL цена, сколько стоит ботокс в Фергане, прейскурант клиники, консультация дерматолога цена"
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
          desc: "Radeski Dermatology and Aesthetic Clinic serves the Fergana Valley with medical expertise and state-of-the-art diagnostic BBL and German PhotoFinder mole mapping.",
          keywords: "Radeski clinic, dermatologist Fergana, aesthetic skincare, laser hair removal, Botox, Sciton BBL, Mohs surgery, mole check"
        },
        about: {
          title: "About Us, Clinical Credentials & Degrees | Radeski Clinic",
          desc: "Learn about Radeski Clinic's history, active clinical registrations, certifications, and medical licensing indicators of our primary physicians.",
          keywords: "About Radeski, clinical licensing, medical accreditation, sterilization box, customer ratings, physician qualifications"
        },
        services: {
          title: "Our 12 Clinical Services & Therapy Segments | Radeski Clinic",
          desc: "Explore our 12 specialized clinical departments covering clinical dermatology, non-invasive hardware cosmetology, injectables, hair treatment, and biopsies.",
          keywords: "Dermatological services, acne removal, injectable solutions, BBL laser, clinical trichology, skin pathology"
        },
        doctors: {
          title: "Our Specialists, Physicians & Surgeons Registry | Radeski",
          desc: "Our medical crew is headed by Dr. Dilshod Davlatovich Ashurov. Internationally certified, peer-reviewed researchers and expert surgeons.",
          keywords: "Dermatologists profiles, Dr. Dilshod Ashurov, Dr. Dilafruz Kodirova, trichologist profile, oncodermatologist, medical staff"
        },
        prices: {
          title: "Service Fee Guide & Cost Estimator (Pricelist) | Radeski Clinic",
          desc: "Transparent price schedule for dermatological checkups, Sciton BBL sessions, Mohs surgeries, trichoscopy, and specialized aesthetic procedures.",
          keywords: "Dermatologist fee, facial BBL price, Botox cost in Fergana, biopsy pricing, clinic rates, service fees"
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

    document.title = `${activeSEO.title}`;

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
    updateMeta('description', activeSEO.desc);
    updateMeta('keywords', activeSEO.keywords);

    // Update Social sharing graph protocols
    updateOg('og:title', activeSEO.title);
    updateOg('og:description', activeSEO.desc);
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
      const pageForAlternates: PageId = currentPage === 'articles' && articleSlug ? 'articles' : currentPage;
      LOCALES.forEach((altLocale) => {
        const altPath = articleSlug
          ? articlePath(altLocale, articleSlug)
          : pagePathForAllLocales(pageForAlternates)[altLocale];
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = localeToHreflang(altLocale);
        link.href = absoluteUrl(altPath);
        link.setAttribute('data-radeski-hreflang', 'true');
        document.head.appendChild(link);
      });

      const defaultPath = articleSlug
        ? articlePath('uz', articleSlug)
        : pagePath('uz', pageForAlternates);
      const defaultLink = document.createElement('link');
      defaultLink.rel = 'alternate';
      defaultLink.hreflang = 'x-default';
      defaultLink.href = absoluteUrl(defaultPath);
      defaultLink.setAttribute('data-radeski-hreflang', 'true');
      document.head.appendChild(defaultLink);
    }

  }, [locale, currentPage, dynamicServiceCategories, location.pathname, articleSlug, forcePage]);

  // Open modal with preselected service category
  const handleOpenAppointmentWithService = (catId?: string) => {
    if (catId) {
      setPreselectedServiceId(catId);
    } else {
      setPreselectedServiceId('');
    }
    setIsAppointmentOpen(true);
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

  if (invalidLocale) {
    return (
      <Navigate
        to={switchLocaleInPath(location.pathname, getPreferredLocale())}
        replace
      />
    );
  }

  return (
    <div className="bg-brand-white min-h-screen text-brand-text-primary antialiased selection:bg-brand-gold selection:text-white pt-[88px] sm:pt-[120px]">

      {dataError && currentPage !== 'admin' && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
          key={`${currentPage}-${articleSlug ?? ''}`}
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
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="max-w-7xl mx-auto px-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
                    <div>
                      <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">{d.navServices}</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mt-1 tracking-tight">
                        {locale === 'uz' ? "Biz davolaydigan asosiy sohalar" : locale === 'ru' ? "Ключевые области лечения" : "Primary Clinical Expertise"}
                      </h3>
                    </div>
                    <button
                      onClick={() => goToPage('services')}
                      className="text-xs font-bold text-brand-gold hover:text-brand-gold-dark flex items-center gap-1 cursor-pointer"
                    >
                      <span>{locale === 'uz' ? "Barcha 12 ta xizmatni ko'rish" : locale === 'ru' ? "Посмотреть все 12 направлений" : "Explore all 12 services"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Horizontal visual Grid of 6 basic categories */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dynamicServiceCategories.slice(0, 6).map(category => (
                      <div
                        key={category.id}
                        className="bg-brand-white border border-brand-sectiongray rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden"
                      >
                        {category.image ? (
                          <div className="relative h-40 overflow-hidden bg-brand-offwhite">
                            <MediaImage
                              src={category.image}
                              alt={category.title[locale]}
                              loading="lazy"
                              className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/75 to-transparent" />
                            <div className="absolute bottom-3 left-4 right-4">
                              <span className="text-[10px] font-bold text-brand-gold-light uppercase tracking-widest">{locale === 'uz' ? "Kategoriya" : locale === 'ru' ? "Направление" : "Specialty"}</span>
                              <h4 className="font-extrabold text-white text-base sm:text-lg mt-0.5 leading-tight">{category.title[locale]}</h4>
                            </div>
                          </div>
                        ) : null}
                        <div className="p-6 flex flex-col flex-1 justify-between">
                          {!category.image && (
                            <>
                              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{locale === 'uz' ? "Kategoriya" : locale === 'ru' ? "Направление" : "Specialty"}</span>
                              <h4 className="font-extrabold text-brand-text-primary text-base sm:text-lg mt-1">{category.title[locale]}</h4>
                            </>
                          )}
                          <p className={`text-xs sm:text-sm text-brand-text-secondary font-light leading-relaxed${category.image ? ' mt-0' : ' mt-3'}`}>{category.description[locale]}</p>
                          <button
                            onClick={() => goToPage('services')}
                            className="mt-6 text-xs text-brand-gold hover:text-brand-gold-dark font-bold text-left inline-flex items-center gap-1 cursor-pointer"
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
                <div className="max-w-7xl mx-auto px-4">
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
                    {dynamicDoctors.slice(0, 3).map(doc => (
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
                          <h4 className="font-extrabold text-brand-text-primary text-md sm:text-base tracking-tight leading-snug mt-1">{doc.name[locale]}</h4>
                          <p className="text-xs text-brand-text-muted mt-2 line-clamp-2 leading-relaxed font-light">{doc.bio[locale]}</p>
                          <button
                            onClick={() => goToPage('doctors')}
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
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
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
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">{locale === 'uz' ? "Ko'rsatkichlar & Fikrlar" : locale === 'ru' ? "Рейтинги и Отзывы" : "Endorsements"}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary tracking-tight mt-1 mb-8">
                    {locale === 'uz' ? "Insonlar nega aynan bizni tanlashadi?" : locale === 'ru' ? "Почему пациенты доверяют именно нам?" : "What supports our clinical trust?"}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {CLINIC_RATINGS.map(plat => (
                      <div key={plat.platform} className="bg-brand-white rounded-2xl p-6 border border-brand-sectiongray text-left flex items-start gap-4 shadow-xs">
                        <div className="w-12 h-12 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-xl shadow-xs shrink-0">{plat.logo}</div>
                        <div>
                          <h4 className="font-extrabold text-brand-text-primary text-lg leading-none">{plat.platform}</h4>
                          <span className="text-xl font-black text-brand-gold block mt-2">{plat.rating} / 5.0</span>
                          <p className="text-xs text-brand-text-muted mt-1">{plat.count}+ {d.reviewsCount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Latest News / Blog preview teaser */}
              <section id="articles-teaser" className="py-16 bg-brand-white border-t border-brand-sectiongray">
                <div className="max-w-7xl mx-auto px-4">
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
                      <div
                        key={art.id}
                        className="bg-brand-white rounded-xl border border-brand-sectiongray overflow-hidden shadow-xs hover:shadow-sm transition-all flex flex-col justify-between group cursor-pointer"
                        onClick={() => goToArticle(art.slug)}
                      >
                        <div className="h-48 overflow-hidden bg-brand-offwhite relative">
                          {art.image ? (
                            <MediaImage src={art.image} alt={art.title[locale]} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-brand-text-muted text-xs">—</div>
                          )}
                        </div>
                        <div className="p-5">
                          <span className="text-[10px] text-brand-text-muted font-light font-mono block mb-1">{art.date} | {art.views} reads</span>
                          <h4 className="font-extrabold text-brand-text-primary text-sm sm:text-base leading-snug group-hover:text-brand-gold transition-colors leading-tight line-clamp-2">{art.title[locale]}</h4>
                          <p className="text-xs text-brand-text-muted mt-2 line-clamp-2 leading-relaxed font-light">{art.summary[locale]}</p>
                          <span className="mt-4 inline-block text-xs font-bold text-brand-gold flex items-center gap-0.5">
                            {d.readMore} <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 10. Robust SEO block with coordinates and MAP integration */}
              <section id="seo-rich-block" className="py-20 bg-brand-offwhite border-t border-brand-sectiongray">
                <div className="max-w-4xl mx-auto px-4 text-center">
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

          {currentPage === 'services' && (
            <Services 
              locale={locale} 
              onOpenAppointment={handleOpenAppointmentWithService} 
              serviceCategories={dynamicServiceCategories}
              dictionary={d}
            />
          )}

          {currentPage === 'doctors' && (
            <Doctors 
              locale={locale} 
              onOpenAppointment={() => handleOpenAppointmentWithService()} 
              doctors={dynamicDoctors}
              dictionary={d}
            />
          )}

          {currentPage === 'prices' && (
            <Prices 
              locale={locale} 
              onOpenAppointment={handleOpenAppointmentWithService} 
              prices={dynamicPrices}
              serviceCategories={dynamicServiceCategories}
              dictionary={d}
            />
          )}

          {currentPage === 'articles' && (
            <Articles 
              locale={locale} 
              articles={dynamicArticles}
              dictionary={d}
              articleSlug={articleSlug}
              onOpenArticle={goToArticle}
              onBackToList={() => goToPage('articles')}
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

          {currentPage === 'contacts' && (
            <div id="contacts-page" className="py-16 bg-brand-offwhite min-h-screen">
              <div className="max-w-7xl mx-auto px-4">
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

      {/* 4. Overlay Appointment Booking dynamic Dialog */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        locale={locale}
        preselectedServiceId={preselectedServiceId}
        serviceCategories={dynamicServiceCategories}
      />
    </div>
  );
}
