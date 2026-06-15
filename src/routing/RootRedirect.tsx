import { Navigate } from 'react-router-dom';
import { getPreferredLocale } from './locale';
import { pagePath } from './paths';

export default function RootRedirect() {
  const locale = getPreferredLocale();
  return <Navigate to={pagePath(locale, 'home')} replace />;
}
