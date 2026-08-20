import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, MapPin, ChevronDown, Clock } from 'lucide-react';
import { Locale, ServiceCategory } from '../types';
import { DICTIONARY, SERVICE_CATEGORIES } from '../data';
import {
  BRAND_NAV_OVERVIEW,
  BRAND_NAV_TITLE,
} from '../data/brandContent';
import { DAAVLIN_NAV_LINEUP } from '../data/daavlinFotoKabinalariContent';
import {
  DAAVLIN_MODELS_NAV_ALL,
  DAAVLIN_MODELS_NAV_TITLE,
} from '../data/daavlinModelDeepContent';
import SiteLogo from './SiteLogo';
import AppointmentBookingLink from './AppointmentBookingLink';
import {
  PageId,
  pagePath,
  serviceCategoryPath,
  servicesListPath,
  brandPath,
  daavlinModelPath,
  getServiceCategoryIdFromPathname,
  getDaavlinModelIdFromPathname,
  type DaavlinModelId,
} from '../routing/paths';
import { CLINIC_PHONE_KOKAND, CLINIC_PHONE_PRIMARY, getHeaderTopBarContacts } from '../config/clinicContacts';
import { getClinicMapOpenUrl, KOKAND_BRANCH_MAP_OPEN_URL } from '../config/links';
import { handleHomeLogoClick } from '../utils/scrollToTop';

interface HeaderProps {
  currentPage: PageId;
  locale: Locale;
  onNavigate: (page: PageId) => void;
  onChangeLocale: (locale: Locale) => void;
  onOpenAppointment: () => void;
  serviceCategories?: ServiceCategory[];
  onOpenServiceCategory?: (categoryId: string) => void;
}

function getCompactAppointmentLabel(locale: Locale): string {
  if (locale === 'uz') return 'Qabul';
  if (locale === 'ru') return 'Запись';
  return 'Book';
}

function DaavlinNavLabel({
  locale,
  size = 'nav',
}: {
  locale: Locale;
  size?: 'nav' | 'mobile';
}) {
  const d = DICTIONARY[locale];
  const subtitleClass =
    size === 'mobile'
      ? 'text-xs font-medium leading-snug'
      : 'text-[9px] xl:text-[10px] 2xl:text-[10px] font-medium leading-snug';
  const widthClass =
    size === 'nav' ? 'max-w-[5.75rem] xl:max-w-[6.25rem] 2xl:max-w-[6.75rem]' : 'max-w-none';

  return (
    <span className={`inline-flex flex-col items-start text-left leading-[1.12] gap-0 ${widthClass}`}>
      <span className="font-semibold whitespace-nowrap">{d.navDaavlinShort}</span>
      <span className={`${subtitleClass} whitespace-normal`}>{d.navDaavlinSubtitle}</span>
    </span>
  );
}

export default function Header({
  currentPage,
  locale,
  onNavigate,
  onChangeLocale,
  serviceCategories = [],
  onOpenServiceCategory,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isDaavlinDropdownOpen, setIsDaavlinDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileDaavlinOpen, setIsMobileDaavlinOpen] = useState(false);
  const location = useLocation();
  const d = DICTIONARY[locale];
  const topBar = getHeaderTopBarContacts(locale);
  const ferganaMapUrl = topBar.ferganaMapUrl || getClinicMapOpenUrl();
  const kokandMapUrl = topBar.kokandMapUrl || KOKAND_BRANCH_MAP_OPEN_URL;
  const mapOpenLabel =
    locale === 'ru' ? 'Открыть на карте' : locale === 'en' ? 'Open in map' : 'Xaritada ochish';
  const activeServiceCategoryId = getServiceCategoryIdFromPathname(location.pathname);
  const activeDaavlinModelId = getDaavlinModelIdFromPathname(location.pathname);
  const daavlinModels = DAAVLIN_NAV_LINEUP;

  const navServiceCategories = useMemo(
    () => (serviceCategories.length > 0 ? serviceCategories : SERVICE_CATEGORIES),
    [serviceCategories],
  );

  const servicesDropdownTitle =
    locale === 'uz' ? 'Asosiy sohalar' : locale === 'ru' ? 'Основные направления' : 'Main areas';

  const allServicesLabel =
    locale === 'uz' ? "Barcha xizmatlar ro'yxati" : locale === 'ru' ? 'Все услуги' : 'All services';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileDaavlinOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsDaavlinDropdownOpen(false);
  }, [location.pathname]);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: d.navHome },
    { id: 'about', label: d.navAbout },
    { id: 'services', label: d.navServices },
    { id: 'daavlin-foto-kabinalari', label: d.navDaavlinFotoKabinalari },
    { id: 'doctors', label: d.navDoctors },
    { id: 'prices', label: d.navPrices },
    { id: 'articles', label: d.navArticles },
    { id: 'videos', label: d.navVideos },
    { id: 'branches', label: d.navBranches },
    { id: 'results', label: d.navResults },
    { id: 'dermoscan', label: d.navDermoScan },
    { id: 'science', label: d.navScience },
    { id: 'obrazovaniya', label: d.navObrazovaniya },
  ];

  const getLanguageLabel = (l: Locale) => {
    switch (l) {
      case 'uz':
        return "O'zbekcha";
      case 'ru':
        return 'Русский';
      case 'en':
        return 'English';
    }
  };

  const navLinkClass = (page: PageId) =>
    `px-1.5 xl:px-2 2xl:px-2.5 py-1.5 rounded-md text-[11px] xl:text-[12px] 2xl:text-[13px] font-medium transition-all cursor-pointer whitespace-nowrap leading-tight ${
      currentPage === page || (page === 'about' && currentPage === 'brend')
        ? 'bg-brand-gold-light/15 text-brand-gold-dark font-semibold'
        : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-offwhite'
    }`;

  const servicesNavClass = navLinkClass('services');
  const aboutNavClass = navLinkClass('about');
  const daavlinNavClass = navLinkClass('daavlin-foto-kabinalari').replace('whitespace-nowrap', 'whitespace-normal');

  const serviceDropdownItemClass = (categoryId: string) =>
    `block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-brand-offwhite ${
      activeServiceCategoryId === categoryId
        ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
        : 'text-brand-text-secondary hover:text-brand-text-primary'
    }`;

  const daavlinModelItemClass = (modelId: string) =>
    `block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-brand-offwhite ${
      activeDaavlinModelId === modelId
        ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
        : 'text-brand-text-secondary hover:text-brand-text-primary'
    }`;

  const renderDesktopNavItem = (item: { id: PageId; label: string }) => {
    if (item.id === 'about') {
      return (
        <div
          key={item.id}
          className="relative shrink-0"
          onMouseEnter={() => setIsAboutDropdownOpen(true)}
          onMouseLeave={() => setIsAboutDropdownOpen(false)}
        >
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className={`${aboutNavClass} inline-flex items-center gap-0.5`}
            aria-haspopup="menu"
            aria-expanded={isAboutDropdownOpen}
          >
            {item.label}
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                isAboutDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isAboutDropdownOpen && (
            <div className="absolute top-full left-0 pt-2 z-[200]">
              <div
                className="min-w-[280px] max-w-[340px] max-h-[min(70vh,520px)] overflow-y-auto bg-white border border-slate-150 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                role="menu"
              >
                <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-gold border-b border-brand-sectiongray/60 mb-1">
                  {BRAND_NAV_TITLE[locale]}
                </p>
                <Link
                  to={brandPath(locale)}
                  role="menuitem"
                  onClick={() => setIsAboutDropdownOpen(false)}
                  className={`block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-brand-offwhite ${
                    currentPage === 'brend'
                      ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
                      : 'text-brand-text-secondary hover:text-brand-text-primary'
                  }`}
                >
                  {BRAND_NAV_OVERVIEW[locale]}
                </Link>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (item.id === 'daavlin-foto-kabinalari') {
      return (
        <div
          key={item.id}
          className="relative shrink-0"
          onMouseEnter={() => setIsDaavlinDropdownOpen(true)}
          onMouseLeave={() => setIsDaavlinDropdownOpen(false)}
        >
          <button
            type="button"
            onClick={() => onNavigate('daavlin-foto-kabinalari')}
            className={`${daavlinNavClass} inline-flex items-start gap-0.5 py-1`}
            aria-haspopup="menu"
            aria-expanded={isDaavlinDropdownOpen}
            title={d.navDaavlinFotoKabinalari}
          >
            <DaavlinNavLabel locale={locale} />
            <ChevronDown
              className={`w-3 h-3 shrink-0 mt-1 transition-transform duration-200 ${
                isDaavlinDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isDaavlinDropdownOpen && (
            <div className="absolute top-full left-0 pt-2 z-[200]">
              <div
                className="min-w-[260px] max-w-[360px] max-h-[min(70vh,520px)] overflow-y-auto bg-white border border-slate-150 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                role="menu"
              >
                <p className="px-4 py-2 text-[10px] font-semibold leading-snug text-brand-gold border-b border-brand-sectiongray/60 mb-1">
                  {d.navDaavlinFotoKabinalari}
                </p>
                <p className="px-4 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold/80">
                  {DAAVLIN_MODELS_NAV_TITLE[locale]}
                </p>
                {daavlinModels.map((model) => (
                  <Link
                    key={model.id}
                    to={daavlinModelPath(locale, model.id as DaavlinModelId)}
                    role="menuitem"
                    onClick={() => setIsDaavlinDropdownOpen(false)}
                    className={daavlinModelItemClass(model.id)}
                  >
                    {model.name}
                  </Link>
                ))}
                <div className="border-t border-brand-sectiongray/60 mt-1 pt-1">
                  <Link
                    to={pagePath(locale, 'clinic-equipment')}
                    onClick={() => setIsDaavlinDropdownOpen(false)}
                    className="block px-4 py-2.5 text-[12px] font-semibold text-brand-gold hover:bg-brand-gold-light/10"
                  >
                    {DAAVLIN_MODELS_NAV_ALL[locale]}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (item.id !== 'services') {
      return (
        <Link key={item.id} to={pagePath(locale, item.id)} className={navLinkClass(item.id)}>
          {item.label}
        </Link>
      );
    }

    return (
      <div
        key={item.id}
        className="relative shrink-0"
        onMouseEnter={() => setIsServicesDropdownOpen(true)}
        onMouseLeave={() => setIsServicesDropdownOpen(false)}
      >
        <button
          type="button"
          onClick={() => onNavigate('services')}
          className={`${servicesNavClass} inline-flex items-center gap-0.5`}
          aria-haspopup="menu"
          aria-expanded={isServicesDropdownOpen}
        >
          {item.label}
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${
              isServicesDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isServicesDropdownOpen && (
          <div className="absolute top-full left-0 pt-2 z-[200]">
            <div
              className="min-w-[280px] max-w-[340px] max-h-[min(70vh,460px)] overflow-y-auto bg-white border border-slate-150 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200"
              role="menu"
            >
              <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-gold border-b border-brand-sectiongray/60 mb-1">
                {servicesDropdownTitle}
              </p>
              {navServiceCategories.map((category) => (
                <Link
                  key={category.id}
                  to={serviceCategoryPath(locale, category.id)}
                  role="menuitem"
                  onClick={() => {
                    onOpenServiceCategory?.(category.id);
                    setIsServicesDropdownOpen(false);
                  }}
                  className={serviceDropdownItemClass(category.id)}
                >
                  {category.title[locale] || category.title.uz}
                </Link>
              ))}
              <div className="border-t border-brand-sectiongray/60 mt-1 pt-1">
                <Link
                  to={servicesListPath(locale)}
                  onClick={() => setIsServicesDropdownOpen(false)}
                  className="block px-4 py-2.5 text-[12px] font-semibold text-brand-gold hover:bg-brand-gold-light/10"
                >
                  {allServicesLabel}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderMobileNavItem = (item: { id: PageId; label: string }) => {
    if (item.id === 'about') {
      return (
        <div key={item.id} className="rounded-lg overflow-hidden">
          <div className="flex items-center">
            <Link
              to={pagePath(locale, 'about')}
              className={`flex-1 text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${aboutNavClass}`}
            >
              {item.label}
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileAboutOpen((open) => !open)}
              className={`mr-1 rounded-lg p-3 ${aboutNavClass}`}
              aria-expanded={isMobileAboutOpen}
              aria-label={BRAND_NAV_TITLE[locale]}
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileAboutOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
          {isMobileAboutOpen && (
            <div className="mt-1 ml-2 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5">
              <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                {BRAND_NAV_TITLE[locale]}
              </p>
              <Link
                to={brandPath(locale)}
                onClick={() => {
                  setIsMobileAboutOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 rounded-lg text-sm text-brand-text-secondary hover:bg-brand-offwhite"
              >
                {BRAND_NAV_OVERVIEW[locale]}
              </Link>
            </div>
          )}
        </div>
      );
    }

    if (item.id === 'daavlin-foto-kabinalari') {
      return (
        <div key={item.id} className="rounded-lg overflow-hidden">
          <div className="flex items-center">
            <Link
              to={pagePath(locale, 'daavlin-foto-kabinalari')}
              className={`flex-1 text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${daavlinNavClass}`}
            >
              <DaavlinNavLabel locale={locale} size="mobile" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileDaavlinOpen((open) => !open)}
              className={`mr-1 rounded-lg p-3 ${daavlinNavClass}`}
              aria-expanded={isMobileDaavlinOpen}
              aria-label={DAAVLIN_MODELS_NAV_TITLE[locale]}
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileDaavlinOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
          {isMobileDaavlinOpen && (
            <div className="mt-1 ml-2 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5">
              <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                {DAAVLIN_MODELS_NAV_TITLE[locale]}
              </p>
              {daavlinModels.map((model) => (
                <Link
                  key={model.id}
                  to={daavlinModelPath(locale, model.id as DaavlinModelId)}
                  onClick={() => {
                    setIsMobileDaavlinOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm hover:bg-brand-offwhite ${
                    activeDaavlinModelId === model.id
                      ? 'font-semibold text-brand-gold-dark bg-brand-gold-light/10'
                      : 'text-brand-text-secondary'
                  }`}
                >
                  {model.name}
                </Link>
              ))}
              <Link
                to={pagePath(locale, 'clinic-equipment')}
                onClick={() => {
                  setIsMobileDaavlinOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-brand-gold hover:bg-brand-gold-light/10"
              >
                {DAAVLIN_MODELS_NAV_ALL[locale]}
              </Link>
            </div>
          )}
        </div>
      );
    }

    if (item.id !== 'services') {
      return (
        <Link
          key={item.id}
          to={pagePath(locale, item.id)}
          className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${navLinkClass(item.id)}`}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <div key={item.id} className="rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => setIsMobileServicesOpen((open) => !open)}
          className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors inline-flex items-center justify-between ${servicesNavClass}`}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isMobileServicesOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isMobileServicesOpen && (
          <div className="mt-1 ml-2 pl-3 border-l-2 border-brand-gold/20 flex flex-col gap-0.5 max-h-[50vh] overflow-y-auto">
            <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
              {servicesDropdownTitle}
            </p>
            {navServiceCategories.map((category) => (
              <Link
                key={category.id}
                to={serviceCategoryPath(locale, category.id)}
                onClick={() => {
                  onOpenServiceCategory?.(category.id);
                  setIsMobileServicesOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${serviceDropdownItemClass(category.id)}`}
              >
                {category.title[locale] || category.title.uz}
              </Link>
            ))}
            <Link
              to={servicesListPath(locale)}
              onClick={() => {
                setIsMobileServicesOpen(false);
                setIsMobileMenuOpen(false);
              }}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-brand-gold hover:bg-brand-gold-light/10"
            >
              {allServicesLabel}
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-40 overflow-visible transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3'
          : 'bg-white py-3 sm:py-4 border-b border-slate-100'
      }`}
    >
      <div className="hidden sm:block w-full border-b border-slate-50 pb-2.5 mb-2.5">
        <div className="site-container flex justify-between items-center gap-3 lg:gap-4 min-w-0">
          <div className="header-topbar-row min-w-0 flex-1">
            <a
              href={ferganaMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={mapOpenLabel}
              className="header-topbar-row__item header-address-link text-slate-600 font-medium"
              aria-label={`${topBar.ferganaAddress} — ${mapOpenLabel}`}
            >
              <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" aria-hidden="true" />
              <span>{topBar.ferganaAddress}</span>
            </a>

            <span className="header-topbar-row__divider" aria-hidden="true">
              |
            </span>

            <a
              href={`tel:${topBar.kokandPhone.tel}`}
              className="header-topbar-row__item phone-call-link cursor-pointer"
              aria-label={`${locale === 'ru' ? 'Позвонить' : locale === 'en' ? 'Call' : 'Telefon'}: ${topBar.kokandPhone.display}`}
            >
              <span className="phone-call-link__wrap">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="phone-call-link__number phone-call-link__number--topbar">
                  {topBar.kokandPhone.display}
                </span>
              </span>
            </a>

            <a
              href={`tel:${topBar.primaryPhone.tel}`}
              className="header-topbar-row__item phone-call-link cursor-pointer"
              aria-label={`${locale === 'ru' ? 'Позвонить' : locale === 'en' ? 'Call' : 'Telefon'}: ${topBar.primaryPhone.display}`}
            >
              <span className="phone-call-link__wrap">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="phone-call-link__number phone-call-link__number--topbar">
                  {topBar.primaryPhone.display}
                </span>
              </span>
            </a>

            <span className="header-topbar-row__divider" aria-hidden="true">
              |
            </span>

            <a
              href={kokandMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={mapOpenLabel}
              className="header-topbar-row__item header-address-link text-slate-600 font-medium"
              aria-label={`${topBar.kokandAddress} — ${mapOpenLabel}`}
            >
              <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" aria-hidden="true" />
              <span>{topBar.kokandAddress}</span>
            </a>
          </div>

          <div className="shrink-0 text-right whitespace-nowrap">
            <span className="text-brand-gold font-semibold font-mono text-[11px] lg:text-xs xl:text-sm">
              {d.workingHoursValue}
            </span>
          </div>
        </div>
      </div>

      <div className="site-container flex items-center min-h-[52px] sm:min-h-[60px] gap-2 xl:gap-3">
        <div className="relative z-20 flex items-center gap-2 shrink-0">
          <Link
            to={pagePath(locale, 'home')}
            onClick={(event) => {
              if (currentPage === 'home') {
                handleHomeLogoClick(event, true);
              } else {
                onNavigate('home');
              }
            }}
            className="relative z-20 flex items-center cursor-pointer group shrink-0"
          >
            <SiteLogo variant="header" className="group-hover:opacity-90 transition-opacity" />
          </Link>

          <AppointmentBookingLink className="sm:hidden header-appointment-btn header-appointment-btn--compact bg-brand-gold hover:bg-brand-gold-dark text-white rounded-lg active:scale-[0.98] transition-colors cursor-pointer no-underline shrink-0">
            {getCompactAppointmentLabel(locale)}
          </AppointmentBookingLink>
        </div>

        <nav className="relative z-30 hidden xl:flex items-center justify-center gap-0 flex-1 min-w-0 px-1 overflow-visible">
          {navItems.map((item) => renderDesktopNavItem(item))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0 ml-auto xl:ml-0">
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-slate-500" />
              <span>{locale.toUpperCase()}</span>
            </button>

            {isLangDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsLangDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 w-36 bg-white border border-slate-150 rounded-xl shadow-xl z-20 py-1 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {(['uz', 'ru', 'en'] as Locale[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        onChangeLocale(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors hover:bg-brand-offwhite flex items-center gap-2 cursor-pointer ${
                        locale === lang
                          ? 'text-brand-gold-dark font-bold bg-brand-gold-light/10'
                          : 'text-brand-text-secondary'
                      }`}
                    >
                      <span className="w-5 text-center text-[10px] leading-none px-1 py-0.5 rounded bg-slate-100 text-slate-500 uppercase font-mono font-bold">
                        {lang}
                      </span>
                      {getLanguageLabel(lang)}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <AppointmentBookingLink className="cta-pulse-ring cta-pulse-ring--button header-appointment-btn header-appointment-btn--nav bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl active:scale-[0.98] transition-colors cursor-pointer no-underline">
            {d.appointmentBtn}
          </AppointmentBookingLink>
        </div>

        <div className="flex sm:hidden items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              const list: Locale[] = ['uz', 'ru', 'en'];
              const nextIndex = (list.indexOf(locale) + 1) % list.length;
              onChangeLocale(list[nextIndex]);
            }}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 text-sm font-bold text-slate-700"
          >
            {locale.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hidden sm:inline-flex xl:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer shrink-0"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-150 shadow-xl py-4 px-4 animate-in fade-in slide-in-from-top-3 duration-200 max-h-[min(80vh,720px)] overflow-y-auto">
          <nav className="flex flex-col gap-1 mb-4">
            {navItems.map((item) => renderMobileNavItem(item))}
          </nav>

          <div className="border-t border-brand-sectiongray pt-4 flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-2">
              <a
                href={`tel:${CLINIC_PHONE_KOKAND.tel}`}
                className="phone-call-link w-full justify-center py-3 text-sm border border-brand-gold/25 rounded-xl bg-brand-gold-light/5 hover:bg-brand-gold-light/10 cursor-pointer"
              >
                <span className="phone-call-link__wrap">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="phone-call-link__number text-sm">{CLINIC_PHONE_KOKAND.display}</span>
                </span>
              </a>
              <a
                href={`tel:${CLINIC_PHONE_PRIMARY.tel}`}
                className="phone-call-link w-full justify-center py-3 text-sm border border-brand-gold/25 rounded-xl bg-brand-gold-light/5 hover:bg-brand-gold-light/10 cursor-pointer"
              >
                <span className="phone-call-link__wrap">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="phone-call-link__number text-sm">{CLINIC_PHONE_PRIMARY.display}</span>
                </span>
              </a>
            </div>
            <AppointmentBookingLink
              onClick={() => setIsMobileMenuOpen(false)}
              className="cta-pulse-ring cta-pulse-ring--button header-appointment-btn header-appointment-btn--mobile w-full bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl text-center transition-colors no-underline"
            >
              {d.appointmentBtn}
            </AppointmentBookingLink>
          </div>
        </div>
      )}

      <div className="sm:hidden border-t border-slate-100 bg-slate-50/95">
        <div className="site-container py-2.5 flex flex-col gap-2">
          <a
            href={ferganaMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={mapOpenLabel}
            className="header-address-link flex items-start justify-center gap-1.5 text-[11px] text-slate-700 text-center leading-snug px-1"
            aria-label={`${topBar.ferganaAddress} — ${mapOpenLabel}`}
          >
            <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>{topBar.ferganaAddress}</span>
          </a>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <a
              href={`tel:${CLINIC_PHONE_KOKAND.tel}`}
              className="phone-call-link phone-call-link--subheader"
              aria-label={`${CLINIC_PHONE_KOKAND.display}`}
            >
              <span className="phone-call-link__wrap">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="phone-call-link__number text-sm whitespace-nowrap">{CLINIC_PHONE_KOKAND.display}</span>
              </span>
            </a>
            <a
              href={`tel:${CLINIC_PHONE_PRIMARY.tel}`}
              className="phone-call-link phone-call-link--subheader"
              aria-label={`${CLINIC_PHONE_PRIMARY.display}`}
            >
              <span className="phone-call-link__wrap">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="phone-call-link__number text-sm whitespace-nowrap">{CLINIC_PHONE_PRIMARY.display}</span>
              </span>
            </a>
          </div>
          <a
            href={kokandMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={mapOpenLabel}
            className="header-address-link flex items-start justify-center gap-1.5 text-[11px] text-slate-700 text-center leading-snug px-1"
            aria-label={`${topBar.kokandAddress} — ${mapOpenLabel}`}
          >
            <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>{topBar.kokandAddress}</span>
          </a>
          <p className="flex items-start justify-center gap-1.5 text-[11px] sm:text-xs text-slate-600 text-center leading-snug px-1">
            <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>{d.workingHoursShort ?? d.workingHoursValue}</span>
          </p>
        </div>
      </div>
    </header>
  );
}
