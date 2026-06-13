import { MapPin, Phone, Clock, Mail, Globe, Send, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY } from '../data';

interface FooterProps {
  locale: Locale;
  onSelectTab: (tab: string) => void;
  onOpenAppointment: () => void;
  currentTab?: string;
}

export default function Footer({ locale, onSelectTab, onOpenAppointment, currentTab }: FooterProps) {
  const d = DICTIONARY[locale];

  return (
    <footer id="main-app-footer" className="bg-brand-dark-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-5 cursor-pointer">
              <div className="w-9 h-9 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-white text-base shadow-md shadow-brand-gold/10">
                R
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight leading-none">
                  RADESKI
                </h4>
                <span className="text-[9px] text-[#A6843F] font-medium tracking-widest uppercase leading-none block mt-1">
                  Skin & Aesthetic Clinic
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
              {locale === 'uz' ? "Farg'onada xavfsiz dermatologiya va innovatsion estetika bo'yicha yetakchi va ko'p tilliy tibbiy klinika portaliz." : 
               locale === 'ru' ? "Ведет дерматологическую и эстетическую клинику в Фергане с европейскими стандартами." : 
                                 "Leading clinical dermatology and hardware aesthetic skincare provider in Fergana."}
            </p>

            {/* Social handles */}
            <div className="flex gap-3">
              <a 
                href="https://t.me/tradeski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-850 hover:bg-brand-gold hover:text-white flex items-center justify-center transition-all text-slate-300"
              >
                <Send className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/radeski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-850 hover:bg-brand-gold hover:text-white flex items-center justify-center transition-all text-slate-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com/radeski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-850 hover:bg-brand-gold hover:text-white flex items-center justify-center transition-all text-slate-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/998732007373" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-850 hover:bg-brand-gold hover:text-white flex items-center justify-center transition-all text-slate-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              {locale === 'uz' ? "Klinika sahifalari" : locale === 'ru' ? "Разделы сайта" : "Navigation"}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button onClick={() => onSelectTab('about')} className="hover:text-brand-gold-light font-light cursor-pointer text-left transition-colors">
                  {d.navAbout}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('services')} className="hover:text-brand-gold-light font-light cursor-pointer text-left transition-colors">
                  {d.navServices}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('doctors')} className="hover:text-brand-gold-light font-light cursor-pointer text-left transition-colors">
                  {d.navDoctors}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('prices')} className="hover:text-brand-gold-light font-light cursor-pointer text-left transition-colors">
                  {d.navPrices}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('articles')} className="hover:text-brand-gold-light font-light cursor-pointer text-left transition-colors">
                  {d.navArticles}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Safe Contacts */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              {d.navContacts}
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span className="font-light text-slate-300 leading-relaxed">
                  Farg'ona sh., O'zbekiston Ovozi ko'chasi, 1A-bino.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                <a href="tel:+998732007373" className="hover:text-brand-gold-light font-mono transition-colors text-slate-300">
                  +998 (73) 200-73-73
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span className="font-light text-slate-300 leading-normal">
                  {d.workingHoursValue}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                <span className="font-light text-slate-300">info@radeski.uz</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Maps Embed */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              {locale === 'uz' ? "Xaritadagi joylashuvimiz" : locale === 'ru' ? "Мы на карте" : "Location map"}
            </h4>
            <div className="w-full h-36 bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              {/* Interactive iframe map targeting clinical Fergana */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0022026857106!2d71.7864115!3d40.3864115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83461413146b%3A0xe5aef1cb446faab4!2zNSwgTyd6YmVraXN0b24gT3Zvemkga28nY2hhc2ksIEZhcmdvbmEsIE96YmVraXN0YW4!5e0!3m2!1sen!2s!4v1718300000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                id="footer-inline-map"
              />
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            <p className="font-light">
              &copy; {new Date().getFullYear()} Radeski Skin & Aesthetic Clinic. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-brand-gold-light transition-colors cursor-pointer font-light">
              Terms of Use
            </span>
            <span className="hover:text-brand-gold-light transition-colors cursor-pointer font-light">
              Privacy Policy
            </span>
            <button 
              onClick={() => onSelectTab(currentTab === 'admin' ? 'home' : 'admin')} 
              className="hover:text-brand-gold-light transition-colors cursor-pointer font-light bg-transparent border-0 p-0 text-left"
              title={currentTab === 'admin' ? "Chiqish" : "Admin Panel Login"}
            >
              {currentTab === 'admin' 
                ? (locale === 'uz' ? "Chiqish" : locale === 'ru' ? "Выйти" : "Logout")
                : (locale === 'uz' ? "Admin panel" : locale === 'ru' ? "Админ панель" : "Admin Panel")
              }
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
