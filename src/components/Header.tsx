import { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, MapPin } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY } from '../data';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  onOpenAppointment: () => void;
}

export default function Header({ currentTab, setCurrentTab, locale, setLocale, onOpenAppointment }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const d = DICTIONARY[locale];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: d.navHome },
    { id: 'about', label: d.navAbout },
    { id: 'services', label: d.navServices },
    { id: 'doctors', label: d.navDoctors },
    { id: 'prices', label: d.navPrices },
    { id: 'articles', label: d.navArticles },
    { id: 'contacts', label: d.navContacts },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLanguageLabel = (l: Locale) => {
    switch (l) {
      case 'uz': return "O'zbekcha";
      case 'ru': return "Русский";
      case 'en': return "English";
    }
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      {/* Top micro bar for quick contacts */}
      <div className="hidden sm:block border-b border-slate-50 pb-2 mb-2 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              Farg'ona, O'zbekiston Ovozi 1A
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              +998 (73) 200-73-73
            </span>
          </div>
          <div>
            <span className="text-brand-gold font-medium font-mono">{d.workingHoursValue}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo and Brand Title */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-md shadow-brand-gold/20 group-hover:scale-105 transition-all">
            R
          </div>
          <div>
            <h1 className="text-base font-bold text-brand-text-primary tracking-tight leading-none group-hover:text-brand-gold transition-colors">
              RADESKI
            </h1>
            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase leading-none">
              Skin & Aesthetic Clinic
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                currentTab === item.id
                  ? 'bg-brand-gold-light/15 text-brand-gold-dark font-semibold'
                  : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-offwhite'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right controls: Lang Selector, Call CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language selection dropdown activator */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-slate-500" />
              <span>{locale.toUpperCase()}</span>
            </button>

            {isLangDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsLangDropdownOpen(false)} 
                />
                <div className="absolute right-0 mt-2 w-36 bg-white border border-slate-150 rounded-xl shadow-xl z-20 py-1 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {(['uz', 'ru', 'en'] as Locale[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLocale(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors hover:bg-brand-offwhite flex items-center gap-2 cursor-pointer ${
                        locale === lang ? 'text-brand-gold-dark font-bold bg-brand-gold-light/10' : 'text-brand-text-secondary'
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

          {/* Quick appointment CTA */}
          <button
            onClick={onOpenAppointment}
            className="bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-semibold px-4.5 py-2.5 rounded-xl shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/25 active:scale-98 transition-all cursor-pointer"
          >
            {d.appointmentBtn}
          </button>
        </div>

        {/* Mobile controls (Just burgers and basic lang selector) */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Simple lang rotation click toggler for fast mobile use */}
          <button
            onClick={() => {
              const list: Locale[] = ['uz', 'ru', 'en'];
              const nextIndex = (list.indexOf(locale) + 1) % list.length;
              setLocale(list[nextIndex]);
            }}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700"
          >
            {locale.toUpperCase()}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-150 shadow-xl py-4 px-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-1 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === item.id
                    ? 'bg-brand-gold-light/10 text-brand-gold-dark font-bold'
                    : 'text-brand-text-secondary hover:bg-brand-offwhite'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Contact & Action */}
          <div className="border-t border-brand-sectiongray pt-4 flex flex-col gap-3">
            <a 
              href="tel:+998732007373"
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-brand-text-secondary border border-brand-sectiongray rounded-xl bg-brand-offwhite hover:bg-brand-sectiongray"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              +998 (73) 200-73-73
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-sm font-semibold py-3 rounded-xl shadow-md text-center"
            >
              {d.appointmentBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
