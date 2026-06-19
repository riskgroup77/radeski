import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, MapPin } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY } from '../data';
import SiteLogo from './SiteLogo';
import AppointmentBookingLink from './AppointmentBookingLink';
import { PageId, pagePath } from '../routing/paths';

interface HeaderProps {
  currentPage: PageId;
  locale: Locale;
  onNavigate: (page: PageId) => void;
  onChangeLocale: (locale: Locale) => void;
  onOpenAppointment: () => void;
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
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const location = useLocation();
  const d = DICTIONARY[locale];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
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

        <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1 min-w-0 px-1 xl:px-3 overflow-x-auto scrollbar-none">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={pagePath(locale, item.id)}
              className={navLinkClass(item.id)}
            >
              {item.label}
            </Link>
          ))}
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
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={pagePath(locale, item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${navLinkClass(item.id)}`}
              >
                {item.label}
              </Link>
            ))}
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
    </header>
  );
}
