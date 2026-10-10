/// <reference types="vite/client" />
import { GA4_MEASUREMENT_ID, YANDEX_METRIKA_ID } from '../config/analytics';

/**
 * Google Analytics 4 + Yandex Metrika, loaded after the page is idle so they never slow the
 * first render. Page views are sent on every route change (single-page app); clicks on
 * phone numbers, booking links, Telegram and Instagram are sent as conversion events.
 * Does nothing when no ID is configured, on the admin panel, or outside the browser.
 */
type Gtag = (...args: unknown[]) => void;
type Ym = ((id: number, ...args: unknown[]) => void) & { a?: unknown[]; l?: number };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    ym?: Ym;
  }
}

const ymId = Number(YANDEX_METRIKA_ID) || 0;
let started = false;

function enabled(): boolean {
  return typeof window !== 'undefined' && Boolean(GA4_MEASUREMENT_ID || ymId) && !window.location.pathname.startsWith('/admin');
}

function addScript(src: string): void {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function loadProviders(): void {
  if (GA4_MEASUREMENT_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_MEASUREMENT_ID, { send_page_view: false });
    addScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_MEASUREMENT_ID)}`);
  }
  if (ymId) {
    const ym: Ym = (...args: unknown[]) => {
      (ym.a = ym.a || []).push(args);
    };
    ym.l = Date.now();
    window.ym = ym;
    addScript('https://mc.yandex.ru/metrika/tag.js');
    window.ym(ymId, 'init', { defer: true, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true });
  }
}

/** Conversion name for a clicked link, or null when it is not one we track. */
function conversionFor(href: string): string | null {
  if (href.startsWith('tel:')) return 'phone_click';
  if (/hipolink\.net|\/booking|qabulga/i.test(href)) return 'booking_click';
  if (/^https?:\/\/(t\.me|telegram\.me)\//i.test(href)) return 'telegram_click';
  if (/instagram\.com/i.test(href)) return 'instagram_click';
  if (/maps\.google|google\.[a-z.]+\/maps|yandex\.[a-z]+\/(maps|profile)|2gis\./i.test(href)) return 'map_click';
  return null;
}

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (!enabled()) return;
  window.gtag?.('event', name, params);
  if (ymId) window.ym?.(ymId, 'reachGoal', name, params);
}

export function trackPageView(path: string): void {
  if (!enabled() || !started) return;
  window.gtag?.('event', 'page_view', { page_path: path, page_location: window.location.href, page_title: document.title });
  if (ymId) window.ym?.(ymId, 'hit', window.location.href, { title: document.title });
}

export function startAnalytics(): void {
  if (started || !enabled()) return;
  const begin = () => {
    if (started) return;
    started = true;
    loadProviders();
    trackPageView(window.location.pathname);
    document.addEventListener(
      'click',
      (event) => {
        const link = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
        const name = link ? conversionFor(link.getAttribute('href') || '') : null;
        if (name) trackEvent(name, { link_url: link!.href, page_path: window.location.pathname });
      },
      { capture: true, passive: true },
    );
  };
  const idle = () => {
    if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(begin, { timeout: 4000 });
    else setTimeout(begin, 2000);
  };
  if (document.readyState === 'complete') idle();
  else window.addEventListener('load', idle, { once: true });
}
