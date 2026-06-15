import { Navigate, useParams } from 'react-router-dom';
import { Locale } from '../types';

interface LocaleAliasRedirectProps {
  locale: Locale;
}

export default function LocaleAliasRedirect({ locale }: LocaleAliasRedirectProps) {
  const params = useParams();
  const rest = params['*'];
  const suffix = rest ? `/${rest}` : '';

  return <Navigate to={`/${locale}${suffix}`} replace />;
}
