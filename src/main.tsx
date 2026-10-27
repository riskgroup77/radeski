import {StrictMode} from 'react';
import { startAnalytics } from './utils/analytics';
import {createRoot, hydrateRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LazyMotion } from 'motion/react';
import App from './App.tsx';
import './index.css';
import { prefetchRouteChunk } from './routing/prefetchRouteChunk';
import { loadSiteSnapshot } from './api/publicDataSource';
import { setInitialSiteData } from './ssr/initialSiteData';
import { preloadSsrRoute } from './ssr/ssrRoutes';

prefetchRouteChunk(window.location.pathname);

const loadMotionFeatures = () => import('./motionFeatures').then((mod) => mod.default);

const app = (
  <StrictMode>
    <LazyMotion features={loadMotionFeatures} strict>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LazyMotion>
  </StrictMode>
);

const rootElement = document.getElementById('root')!;

/**
 * Server-rendered page (data-ssr, see src/ssr): the HTML is already the finished page. Build
 * the same site data from the snapshot and load the route's text, then hydrate — React takes
 * over the existing DOM instead of drawing the page again.
 */
async function hydrateServerRenderedPage(): Promise<void> {
  try {
    const [core, prices, { buildInitialSiteData }] = await Promise.all([
      loadSiteSnapshot(),
      loadSiteSnapshot('prices'),
      import('./ssr/buildInitialSiteData'),
    ]);
    if (!core) throw new Error('site snapshot unavailable');
    const data = buildInitialSiteData({ ...core.data, prices: prices?.data.prices ?? core.data.prices });
    setInitialSiteData(data);
    await preloadSsrRoute(window.location.pathname, data);
  } catch (error) {
    // Without the data the first render would not match the HTML: draw the page from scratch.
    console.warn('[ssr] hydration data unavailable, rendering on the client', error);
    createRoot(rootElement).render(app);
    return;
  }
  hydrateRoot(rootElement, app, {
    onRecoverableError(error, info) {
      // A mismatch (e.g. the CMS changed since the build): React re-renders that part itself.
      console.warn('[ssr] hydration mismatch', error, info.componentStack);
    },
  });
}

if (rootElement.dataset.ssr) {
  void hydrateServerRenderedPage();
} else {
  createRoot(rootElement).render(app);
}

startAnalytics();
