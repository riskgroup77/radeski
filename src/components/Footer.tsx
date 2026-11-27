import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, Facebook } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY } from '../data';
import SiteLogo from './SiteLogo';
import InstagramBranchPicker from './InstagramBranchPicker';
import { PageId, pagePath } from '../routing/paths';
import { CLINIC_MAP_EMBED_URL, CLINIC_SOCIAL_LINKS } from '../config/links';
import { handleHomeLogoClick } from '../utils/scrollToTop';
import { CLINIC_PHONE_FERGANA_MOBILE, CLINIC_PHONE_KOKAND, CLINIC_PHONE_PRIMARY, FERGANA_ADDRESS, KOKAND_ADDRESS } from '../config/clinicNap';

interface FooterProps {
  /** DICTIONARY merged with admin-edited clinic texts (working hours…). */
  dictionary?: Record<string, string>;
  locale: Locale;
  onNavigate: (page: PageId) => void;
  onOpenAppointment: () => void;
  currentPage?: PageId;
}

/**
 * The Google map pulls ~250 KB of Maps scripts, so the iframe is only created once the
 * footer is close to the screen (native loading="lazy" starts it far too early on mobile).
 */
function useNearViewport<T extends Element>() {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || near) return;
    if (typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [near]);
  return [ref, near] as const;
}

export default function Footer({ locale, onNavigate, onOpenAppointment, currentPage, dictionary }: FooterProps) {
  const [mapRef, mapNear] = useNearViewport<HTMLDivElement>();
  const d = { ...DICTIONARY[locale], ...dictionary };
  const isAdmin = currentPage === 'admin';

  return (
    <footer id="main-app-footer" className="bg-brand-dark-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div>
            <Link
              to={pagePath(locale, 'home')}
              onClick={(event) => {
                if (currentPage === 'home') {
                  handleHomeLogoClick(event, true);
                } else {
                  onNavigate('home');
                }
              }}
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
                href={CLINIC_SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-850 hover:bg-brand-gold hover:text-white flex items-center justify-center transition-all text-slate-300"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <InstagramBranchPicker locale={locale} />
              <a
                href={CLINIC_SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-850 hover:bg-brand-gold hover:text-white flex items-center justify-center transition-all text-slate-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
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
              <li>
                <Link to={pagePath(locale, 'videos')} className="hover:text-brand-gold-light font-light transition-colors">
                  {d.navVideos}
                </Link>
              </li>
              <li>
                <Link to={pagePath(locale, 'branches')} className="hover:text-brand-gold-light font-light transition-colors">
                  {d.navBranches}
                </Link>
              </li>
              <li>
                <Link to={pagePath(locale, 'fargona')} className="hover:text-brand-gold-light font-light transition-colors">
                  {locale === 'uz' ? 'Dermatolog Farg‘ona' : locale === 'ru' ? 'Дерматолог Фергана' : 'Dermatologist Fergana'}
                </Link>
              </li>
              <li>
                <Link to={pagePath(locale, 'qoqon')} className="hover:text-brand-gold-light font-light transition-colors">
                  {locale === 'uz' ? 'Dermatolog Qo‘qon' : locale === 'ru' ? 'Дерматолог Коканд' : 'Dermatologist Kokand'}
                </Link>
              </li>
              <li>
                <Link to={pagePath(locale, 'results')} className="hover:text-brand-gold-light font-light transition-colors">
                  {d.navResults}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">{d.addressTitle}</h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              {/* Both branches, each with its own address and numbers (audit 26.11: Kokand visitors need the Kokand number). */}
              {[
                {
                  city: locale === 'ru' ? 'Фергана' : locale === 'en' ? 'Fergana' : "Farg'ona",
                  address: FERGANA_ADDRESS[locale],
                  phones: [CLINIC_PHONE_PRIMARY, CLINIC_PHONE_FERGANA_MOBILE],
                },
                {
                  city: locale === 'ru' ? 'Коканд' : locale === 'en' ? 'Kokand' : "Qo'qon",
                  address: KOKAND_ADDRESS[locale],
                  phones: [CLINIC_PHONE_KOKAND],
                },
              ].map((branch) => (
                <li key={branch.city} className="flex items-start gap-2.5">
                  <MapPin className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="flex flex-col gap-1">
                    <span className="font-semibold text-white">{branch.city}</span>
                    <span className="font-light text-slate-300 leading-relaxed">{branch.address}</span>
                    {branch.phones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="inline-flex items-center gap-1.5 hover:text-brand-gold-light font-mono transition-colors text-slate-300"
                      >
                        <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        {phone.display}
                      </a>
                    ))}
                  </span>
                </li>
              ))}
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
            <div ref={mapRef} className="w-full h-36 bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              {mapNear && (
                <iframe
                  src={CLINIC_MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Radeski Skin Clinic — Google Maps"
                  id="footer-inline-map"
                />
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            {/* A page server-rendered last year hydrates with this year: not a real mismatch. */}
            <p className="font-light" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Radeski Skin & Aesthetic Clinic
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
            <Link
              to={pagePath(locale, 'terms')}
              className="hover:text-brand-gold-light transition-colors font-light"
            >
              {d.navTerms}
            </Link>
            <Link
              to={pagePath(locale, 'privacy')}
              className="hover:text-brand-gold-light transition-colors font-light"
            >
              {d.navPrivacy}
            </Link>
            <Link
              to={isAdmin ? pagePath(locale, 'home') : '/admin'}
              // Staff entrance: not a page for search engines to follow.
              rel={isAdmin ? undefined : 'nofollow'}
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
