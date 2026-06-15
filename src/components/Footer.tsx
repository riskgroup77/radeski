import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, Send, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY } from '../data';
import SiteLogo from './SiteLogo';
import { PageId, pagePath } from '../routing/paths';

interface FooterProps {
  locale: Locale;
  onNavigate: (page: PageId) => void;
  onOpenAppointment: () => void;
  currentPage?: PageId;
}

export default function Footer({ locale, onNavigate, onOpenAppointment, currentPage }: FooterProps) {
  const d = DICTIONARY[locale];
  const isAdmin = currentPage === 'admin';

  return (
    <footer id="main-app-footer" className="bg-brand-dark-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div>
            <Link
              to={pagePath(locale, 'home')}
              onClick={() => onNavigate('home')}
              className="inline-flex mb-5 cursor-pointer group"
            >
              <SiteLogo variant="footer" className="group-hover:opacity-90 transition-opacity" />
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
              {locale === 'uz'
                ? "Farg'onada xavfsiz dermatologiya va innovatsion estetika bo'yicha yetakchi va ko'p tilliy tibbiy klinika portaliz."
                : locale === 'ru'
                  ? 'Ведет дерматологическую и эстетическую клинику в Фергане с европейскими стандартами.'
                  : 'Leading clinical dermatology and hardware aesthetic skincare provider in Fergana.'}
            </p>

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

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              {locale === 'uz' ? 'Klinika sahifalari' : locale === 'ru' ? 'Разделы сайта' : 'Navigation'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link to={pagePath(locale, 'about')} className="hover:text-brand-gold-light font-light transition-colors">
                  {d.navAbout}
                </Link>
              </li>
              <li>
                <Link to={pagePath(locale, 'services')} className="hover:text-brand-gold-light font-light transition-colors">
                  {d.navServices}
                </Link>
              </li>
              <li>
                <Link to={pagePath(locale, 'doctors')} className="hover:text-brand-gold-light font-light transition-colors">
                  {d.navDoctors}
                </Link>
              </li>
              <li>
                <Link to={pagePath(locale, 'prices')} className="hover:text-brand-gold-light font-light transition-colors">
                  {d.navPrices}
                </Link>
              </li>
              <li>
                <Link to={pagePath(locale, 'articles')} className="hover:text-brand-gold-light font-light transition-colors">
                  {d.navArticles}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">{d.navContacts}</h4>
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
                <span className="font-light text-slate-300 leading-normal">{d.workingHoursValue}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                <span className="font-light text-slate-300">info@radeski.uz</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">
              {locale === 'uz' ? 'Xaritadagi joylashuvimiz' : locale === 'ru' ? 'Мы на карте' : 'Location map'}
            </h4>
            <div className="w-full h-36 bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
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

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            <p className="font-light">
              &copy; {new Date().getFullYear()} Radeski Skin & Aesthetic Clinic. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-brand-gold-light transition-colors cursor-pointer font-light">Terms of Use</span>
            <span className="hover:text-brand-gold-light transition-colors cursor-pointer font-light">Privacy Policy</span>
            <Link
              to={isAdmin ? pagePath(locale, 'home') : '/admin'}
              onClick={() => onNavigate(isAdmin ? 'home' : 'admin')}
              className="hover:text-brand-gold-light transition-colors cursor-pointer font-light"
              title={isAdmin ? 'Chiqish' : 'Admin Panel Login'}
            >
              {isAdmin
                ? locale === 'uz'
                  ? 'Chiqish'
                  : locale === 'ru'
                    ? 'Выйти'
                    : 'Logout'
                : locale === 'uz'
                  ? 'Admin panel'
                  : locale === 'ru'
                    ? 'Админ панель'
                    : 'Admin Panel'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
