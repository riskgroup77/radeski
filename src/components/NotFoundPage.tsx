import { Link } from 'react-router-dom';
import { Home, Stethoscope, Newspaper, Phone } from 'lucide-react';
import type { Locale } from '../types';
import { pagePath, type PageId } from '../routing/paths';

const COPY: Record<Locale, { title: string; text: string; home: string; services: string; doctors: string; articles: string; contact: string }> = {
  uz: {
    title: 'Sahifa topilmadi',
    text: "Siz izlagan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan. Quyidagi bo'limlardan birini tanlang.",
    home: 'Bosh sahifa',
    services: 'Xizmatlar',
    doctors: 'Shifokorlar',
    articles: 'Maqolalar',
    contact: 'Filiallar va aloqa',
  },
  ru: {
    title: 'Страница не найдена',
    text: 'Запрошенная страница не существует или была перемещена. Выберите один из разделов ниже.',
    home: 'Главная',
    services: 'Услуги',
    doctors: 'Врачи',
    articles: 'Статьи',
    contact: 'Филиалы и контакты',
  },
  en: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved. Pick one of the sections below.',
    home: 'Home',
    services: 'Services',
    doctors: 'Doctors',
    articles: 'Articles',
    contact: 'Branches & contacts',
  },
};

export function getNotFoundTitle(locale: Locale): string {
  return COPY[locale].title;
}

export default function NotFoundPage({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  const links: { page: PageId; label: string; Icon: typeof Home }[] = [
    { page: 'home', label: copy.home, Icon: Home },
    { page: 'services', label: copy.services, Icon: Stethoscope },
    { page: 'doctors', label: copy.doctors, Icon: Stethoscope },
    { page: 'articles', label: copy.articles, Icon: Newspaper },
    { page: 'branches', label: copy.contact, Icon: Phone },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-white min-h-[60vh]">
      <div className="site-container max-w-2xl text-center">
        <p className="font-display text-6xl sm:text-7xl font-extrabold text-brand-gold/30 leading-none">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-brand-text-primary">{copy.title}</h1>
        <p className="mt-3 text-sm sm:text-base text-brand-text-muted leading-relaxed">{copy.text}</p>
        <nav className="mt-8 flex flex-wrap justify-center gap-2.5" aria-label={copy.title}>
          {links.map(({ page, label, Icon }) => (
            <Link
              key={page}
              to={pagePath(locale, page)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                page === 'home'
                  ? 'bg-brand-gold text-white hover:bg-brand-gold-dark'
                  : 'border border-brand-sectiongray bg-brand-white text-brand-text-primary hover:border-brand-gold/40 hover:text-brand-gold-dark'
              }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
