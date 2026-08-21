import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Smartphone, Star, X } from 'lucide-react';
import type { Locale } from '../types';
import { DERMO_SCAN } from '../data/dermoScanContent';
import MediaImage from './MediaImage';

const BANNER_DISMISS_KEY = 'dermoscan-install-banner-dismissed';
export const DERMOSCAN_APP_INSTALL_SECTION_ID = 'dermoscan-app-install';

const SCREENSHOTS = [
  '/dermoscan/dermoscan-seq-01.webp',
  '/dermoscan/dermoscan-seq-02.webp',
  '/dermoscan/dermoscan-seq-03.webp',
  '/dermoscan/dermoscan-seq-04.webp',
] as const;

interface DermoScanAppInstallSectionProps {
  locale: Locale;
}

function GooglePlayBadge({ label, sublabel }: { label: string; sublabel: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
        <path
          fill="currentColor"
          d="M3.6 1.8c-.3.2-.5.6-.5 1v18.4c0 .4.2.8.5 1l.1.1 10.3-10.3v-.2L3.7 1.7l-.1.1zm12.8 8.9-2.7-2.7-2.8 2.8 2.8 2.8 2.7-2.7c.5-.5.5-1.3 0-1.8zM13.4 10.7l2.8-2.8L5.8 1.2c.4-.2.9-.2 1.3 0l6.3 6.3 2.8-2.8L4.5 0C3.9-.2 3.2 0 2.7.4 2.2.9 2 1.5 2 2.2v19.6c0 .7.2 1.3.7 1.8.5.5 1.1.7 1.8.7.3 0 .7-.1 1-.2l11.7-6.7-2.8-2.8z"
        />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className="text-[9px] font-medium uppercase tracking-wide opacity-80">{sublabel}</span>
        <span className="text-sm font-bold">{label}</span>
      </span>
    </span>
  );
}

function AppStoreBadge({ label, sublabel }: { label: string; sublabel: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
        <path
          fill="currentColor"
          d="M18.7 19.5c-.5.7-1.1 1.4-2 1.4-.8 0-1.1-.5-2.1-.5-1 0-1.3.5-2.1.5-.9 0-1.6-.7-2.1-1.4-1.8-2.5-2-6.1-.8-8.8.6-1.3 1.7-2.2 3-2.3.8 0 1.5.5 2 .5.5 0 1.4-.6 2.3-.5 1 .1 1.9.6 2.5 1.5-2.2 1.2-1.8 4.4.4 5.3-.4 1.1-1 2.2-1.7 3.1.4.5.8 1 1.2 1.5zm-2.1-13.5c.5-.6.9-1.5.8-2.3-.8 0-1.7.5-2.2 1.2-.5.6-.9 1.5-.8 2.3.9.1 1.8-.4 2.2-1.2z"
        />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className="text-[9px] font-medium uppercase tracking-wide opacity-80">{sublabel}</span>
        <span className="text-sm font-bold">{label}</span>
      </span>
    </span>
  );
}

function StoreButton({
  children,
  onClick,
  variant,
}: {
  children: ReactNode;
  onClick: () => void;
  variant: 'dark' | 'light';
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-w-[160px] items-center justify-start rounded-xl px-4 py-2.5 transition-all cursor-pointer sm:min-w-[180px] ${
        variant === 'dark'
          ? 'bg-brand-dark-navy text-white hover:bg-brand-dark-navy/90 shadow-md'
          : 'bg-brand-white text-brand-text-primary border border-brand-sectiongray hover:bg-brand-offwhite shadow-sm'
      }`}
    >
      {children}
    </button>
  );
}

function MobileInstallBanner({
  locale,
  onLearnMore,
}: {
  locale: Locale;
  onLearnMore: () => void;
}) {
  const c = DERMO_SCAN.appInstall;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.localStorage.getItem(BANNER_DISMISS_KEY) === '1') return;
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setVisible(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const dismiss = () => {
    setVisible(false);
    window.localStorage.setItem(BANNER_DISMISS_KEY, '1');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-sectiongray bg-brand-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex max-w-lg items-center gap-3">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-brand-sectiongray bg-brand-offwhite shadow-sm">
              <MediaImage
                src="/dermoscan/dermoscan-app.webp"
                alt="DermaScan"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-brand-text-primary">{c.bannerTitle[locale]}</p>
              <p className="truncate text-xs text-brand-text-muted">{c.bannerSubtitle[locale]}</p>
            </div>
            <button
              type="button"
              onClick={onLearnMore}
              className="shrink-0 rounded-lg bg-brand-gold px-3 py-2 text-xs font-bold text-white cursor-pointer"
            >
              {c.bannerAction[locale]}
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="shrink-0 rounded-lg p-2 text-brand-text-muted hover:bg-brand-offwhite cursor-pointer"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function DermoScanAppInstallSection({ locale }: DermoScanAppInstallSectionProps) {
  const c = DERMO_SCAN.appInstall;
  const [toast, setToast] = useState(false);
  const sectionId = DERMOSCAN_APP_INSTALL_SECTION_ID;

  const showComingSoon = useCallback(() => {
    setToast(true);
    window.setTimeout(() => setToast(false), 4000);
  }, []);

  const scrollToSection = () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <MobileInstallBanner locale={locale} onLearnMore={scrollToSection} />

      <motion.section
        id={sectionId}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mb-10 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-md sm:mb-14"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold-light/10 via-transparent to-brand-dark-navy/5 pointer-events-none" />

        <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-[minmax(0,340px)_1fr]">
          {/* Phone mockup */}
          <div className="flex items-center justify-center bg-gradient-to-b from-brand-offwhite to-brand-white p-8 sm:p-10 lg:p-12">
            <div className="relative w-[220px] sm:w-[240px]">
              <div className="rounded-[2.25rem] border-[6px] border-brand-dark-navy bg-brand-dark-navy p-2 shadow-2xl shadow-brand-dark-navy/25">
                <div className="overflow-hidden rounded-[1.6rem] bg-brand-white aspect-[9/19]">
                  <MediaImage
                    src="/dermoscan/dermoscan-app.webp"
                    alt="DermaScan"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -right-3 top-8 hidden h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold-light/20 sm:flex">
                <Smartphone className="h-7 w-7 text-brand-gold" />
              </div>
            </div>
          </div>

          {/* Store listing */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <span className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-gold">
              {c.eyebrow[locale]}
            </span>
            <div className="mb-4 flex flex-wrap items-start gap-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-brand-sectiongray shadow-sm sm:h-[72px] sm:w-[72px]">
                <MediaImage
                  src="/dermoscan/dermoscan-app.webp"
                  alt="DermaScan"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-extrabold tracking-tight text-brand-text-primary sm:text-2xl">
                  DermaScan
                </h2>
                <p className="text-sm font-medium text-brand-gold">{c.developer[locale]}</p>
                <p className="mt-1 text-xs text-brand-text-muted">{c.category[locale]}</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800">
                {c.comingSoon[locale]}
              </span>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-1 font-semibold text-brand-text-primary">
                4.9
                <span className="inline-flex text-brand-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                  ))}
                </span>
              </span>
              <span className="text-brand-text-muted">·</span>
              <span className="text-brand-text-secondary">{c.ratingLabel[locale]}</span>
              <span className="hidden text-brand-text-muted sm:inline">·</span>
              <span className="hidden text-brand-text-secondary sm:inline">{c.installsLabel[locale]}</span>
            </div>

            <p className="mb-6 max-w-xl text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
              {c.subtitle[locale]}
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
              <StoreButton variant="dark" onClick={showComingSoon}>
                <GooglePlayBadge label={c.playStore[locale]} sublabel={c.getOn[locale]} />
              </StoreButton>
              <StoreButton variant="light" onClick={showComingSoon}>
                <AppStoreBadge label={c.appStore[locale]} sublabel={c.downloadOn[locale]} />
              </StoreButton>
            </div>

            <p className="mb-6 rounded-xl border border-brand-gold/20 bg-brand-gold-light/10 px-4 py-3 text-xs font-light leading-relaxed text-brand-text-secondary sm:text-sm">
              {c.comingSoonNote[locale]}
            </p>

            <h3 className="mb-3 text-sm font-extrabold text-brand-text-primary">{c.featuresTitle[locale]}</h3>
            <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {c.features.map((feature) => (
                <li key={feature.uz} className="flex items-start gap-2 text-xs font-light text-brand-text-secondary sm:text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  {feature[locale]}
                </li>
              ))}
            </ul>

            <div>
              <h3 className="mb-3 text-sm font-extrabold text-brand-text-primary">{c.screenshotsTitle[locale]}</h3>
              <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                {SCREENSHOTS.map((src) => (
                  <div
                    key={src}
                    className="h-36 w-20 shrink-0 snap-start overflow-hidden rounded-xl border border-brand-sectiongray bg-brand-offwhite shadow-sm sm:h-44 sm:w-24"
                  >
                    <MediaImage src={src} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="absolute bottom-4 left-4 right-4 rounded-xl border border-brand-sectiongray bg-brand-dark-navy px-4 py-3 text-sm font-medium text-white shadow-lg sm:left-auto sm:right-6 sm:max-w-sm"
              role="status"
            >
              {c.comingSoonToast[locale]}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
