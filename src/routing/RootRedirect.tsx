import { Navigate } from 'react-router-dom';
import { getStoredLocale } from './locale';
import { pagePath } from './paths';

/**
 * Root `/` must not follow Googlebot Accept-Language (usually `en`).
 * Prefer saved user choice; otherwise always Uzbek (x-default market language).
 */
export default function RootRedirect() {
  const locale = getStoredLocale() ?? 'uz';
  return <Navigate to={pagePath(locale, 'home')} replace />;
}
