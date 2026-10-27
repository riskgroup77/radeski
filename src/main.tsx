import {StrictMode} from 'react';
import { startAnalytics } from './utils/analytics';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LazyMotion } from 'motion/react';
import App from './App.tsx';
import './index.css';
import { prefetchRouteChunk } from './routing/prefetchRouteChunk';

prefetchRouteChunk(window.location.pathname);

const loadMotionFeatures = () => import('./motionFeatures').then((mod) => mod.default);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={loadMotionFeatures} strict>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LazyMotion>
  </StrictMode>,
);

startAnalytics();
