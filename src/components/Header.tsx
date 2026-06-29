import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, MapPin, ChevronDown, Clock } from 'lucide-react';
import { Locale, ServiceCategory } from '../types';
import { DICTIONARY, SERVICE_CATEGORIES } from '../data';
import SiteLogo from './SiteLogo';
import AppointmentBookingLink from './AppointmentBookingLink';
import {
  PageId,
  pagePath,
  serviceCategoryPath,
  servicesListPath,
  getServiceCategoryIdFromPathname,
} from '../routing/paths';

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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const d = DICTIONARY[locale];
  const activeServiceCategoryId = getServiceCategoryIdFromPathname(location.pathname);

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
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: d.navHome },
    { id: 'about', label: d.navAbout },
    { id: 'services', label: d.navServices },
    { id: 'doctors', label: d.navDoctors },
    { id: 'prices', label: d.navPrices },
    { id: 'articles', label: d.navArticles },
    { id: 'contacts', label: d.navContacts },
    { id: 'videos', label: d.navVideos },
    { id: 'branches', label: d.navBranches },
    { id: 'results', label: d.navResults },
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
    `px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-[14px] font-medium transition-all cursor-pointer whitespace-nowrap ${
      currentPage === page
        ? 'bg-brand-gold-light/15 text-brand-gold-dark font-semibold'
        : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-offwhite'
    }`;

  const servicesNavClass = navLinkClass('services');

  const serviceDropdownItemClass = (categoryId: string) =>
    `block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-brand-offwhite ${
      activeServiceCategoryId === categoryId
        ? 'text-brand-gold-dark font-semibold bg-brand-gold-light/10'
        : 'text-brand-text-secondary hover:text-brand-text-primary'
    }`;

  const renderDesktopNavItem = (item: { id: PageId; label: string }) => {
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
          className={`${servicesNavClass} inline-flex items-center gap-1`}
          aria-haspopup="menu"
          aria-expanded={isServicesDropdownOpen}
        >
          {item.label}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isServicesDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isServicesDropdownOpen && (
          <div className="absolute top-full left-0 pt-2 z-[100]">
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3'
          : 'bg-white py-3 sm:py-4 border-b border-slate-100'
      }`}
    >
      <div className="hidden sm:block w-full border-b border-slate-50 pb-2.5 mb-2.5 text-sm sm:text-[15px] leading-snug text-slate-600">
        <div className="site-container flex justify-between items-center gap-6">
          <div className="flex items-center gap-5 lg:gap-8 xl:gap-10 flex-wrap min-w-0">
            <span className="flex items-center gap-2 font-medium">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              Farg&apos;ona, O&apos;zbekiston Ovozi 1A
            </span>
            <a
              href="tel:+998732007373"
              className="phone-call-link shrink-0 cursor-pointer"
              aria-label={
                locale === 'uz'
                  ? 'Telefon qilish: +998 (73) 200-73-73'
                  : locale === 'ru'
                    ? 'Позвонить: +998 (73) 200-73-73'
                    : 'Call: +998 (73) 200-73-73'
              }
            >
              <span className="phone-call-link__wrap">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="phone-call-link__number phone-call-link__number--topbar">+998 (73) 200-73-73</span>
              </span>
            </a>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-brand-gold font-semibold font-mono">{d.workingHoursValue}</span>
          </div>
        </div>
      </div>

      <div className="site-container flex justify-between items-center min-h-[56px] sm:min-h-[64px] gap-3 lg:gap-6">
        <div className="flex items-center gap-2 shrink-0 min-w-0">
          <Link
            to={pagePath(locale, 'home')}
            onClick={() => onNavigate('home')}
            className="flex items-center cursor-pointer group shrink-0"
          >
            <SiteLogo variant="header" className="group-hover:opacity-90 transition-opacity" />
          </Link>

          <AppointmentBookingLink className="sm:hidden header-appointment-btn header-appointment-btn--compact bg-brand-gold hover:bg-brand-gold-dark text-white rounded-lg active:scale-[0.98] transition-colors cursor-pointer no-underline shrink-0">
            {getCompactAppointmentLabel(locale)}
          </AppointmentBookingLink>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1 min-w-0 px-1 xl:px-3 overflow-visible">
          {navItems.map((item) => renderDesktopNavItem(item))}
        </nav>

        <div className="hidden sm:flex items-center gap-3 lg:gap-4 shrink-0">
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-700 transition-all cursor-pointer"
            >
              <Globe className="w-[18px] h-[18px] text-slate-500" />
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

          <AppointmentBookingLink className="cta-pulse-ring cta-pulse-ring--button header-appointment-btn bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl active:scale-[0.98] transition-colors cursor-pointer no-underline">
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
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-150 shadow-xl py-4 px-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-1 mb-4">
            {navItems.map((item) => renderMobileNavItem(item))}
          </nav>

          <div className="border-t border-brand-sectiongray pt-4 flex flex-col gap-3">
            <a
              href="tel:+998732007373"
              className="phone-call-link w-full justify-center py-3 text-sm border border-brand-gold/25 rounded-xl bg-brand-gold-light/5 hover:bg-brand-gold-light/10 cursor-pointer"
            >
              <span className="phone-call-link__wrap">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="phone-call-link__number text-sm">+998 (73) 200-73-73</span>
              </span>
            </a>
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
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.addressShort ?? d.addressValue)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-center gap-1.5 text-[11px] text-slate-700 text-center leading-snug px-1 hover:text-brand-gold transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>{d.addressShort ?? d.addressValue}</span>
          </a>
          <a
            href="tel:+998732007373"
            className="phone-call-link phone-call-link--subheader w-full justify-center"
            aria-label={
              locale === 'uz'
                ? 'Telefon qilish: +998 (73) 200-73-73'
                : locale === 'ru'
                  ? 'Позвонить: +998 (73) 200-73-73'
                  : 'Call: +998 (73) 200-73-73'
            }
          >
            <span className="phone-call-link__wrap">
              <Phone className="w-4 h-4 shrink-0" />
              <span className="phone-call-link__number text-sm whitespace-nowrap">+998 (73) 200-73-73</span>
            </span>
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
