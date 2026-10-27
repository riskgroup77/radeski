/**
 * Server render of the real app (the same tree main.tsx hydrates), used by the prerender for
 * the routes in SSR_ROUTE. prerenderToNodeStream waits for lazy route chunks (Suspense), so
 * the HTML holds the finished page, not its loading fallback.
 */
import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router';
import { LazyMotion, domMax } from 'motion/react';
import App from '../App';
import { setInitialSiteData, type InitialSiteData } from './initialSiteData';
import { preloadSsrRoute } from './ssrRoutes';

export { isSsrRoute } from './ssrRoutes';

export async function renderAppHtml(pathname: string, data: InitialSiteData): Promise<string> {
  setInitialSiteData(data);
  await preloadSsrRoute(pathname, data);
  const errors: unknown[] = [];
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <LazyMotion features={domMax} strict>
        <StaticRouter location={pathname}>
          <App />
        </StaticRouter>
      </LazyMotion>
    </StrictMode>,
    {
      // Inline every Suspense boundary's content: no fallback + hidden copy + $RC script.
      progressiveChunkSize: Number.POSITIVE_INFINITY,
      onError(error) {
        errors.push(error);
      },
    },
  );
  let html = '';
  for await (const chunk of prelude) html += typeof chunk === 'string' ? chunk : Buffer.from(chunk).toString('utf8');
  if (errors.length) throw errors[0] instanceof Error ? errors[0] : new Error(String(errors[0]));
  return html;
}
