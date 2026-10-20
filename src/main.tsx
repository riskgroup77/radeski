import {StrictMode} from 'react';
import { startAnalytics } from './utils/analytics';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { prefetchRouteChunk } from './routing/prefetchRouteChunk';

prefetchRouteChunk(window.location.pathname);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

startAnalytics();
