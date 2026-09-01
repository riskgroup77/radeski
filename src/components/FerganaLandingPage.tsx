import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, Stethoscope, Sparkles, Zap, Sun } from 'lucide-react';
import type { Locale } from '../types';
import { CLINIC_PHONE_PRIMARY } from '../config/clinicContacts';
import { getClinicMapOpenUrl } from '../config/links';
import {
  COMPETITIVE_ADVANTAGES,
  POSITIONING_FORMULA,
  getCityCommercialLinks,
  getLocalizedCopy,
  localCommercialPath,
} from '../data/localCommercialSeoCatalog';
import { pagePath, serviceCategoryPath, serviceSubPath, articlePath } from '../routing/paths';
import { resolveArticleRouteKey } from '../utils/articles';
import AppointmentBookingLink from './AppointmentBookingLink';

interface FerganaLandingPageProps {
  locale: Locale;
  appointmentLabel: string;
}

const SERVICES: { id: string; icon: typeof Stethoscope; uz: string; ru: string; en: string }[] = [
  {
    id: 'dermatologiya',
    icon: Stethoscope,
    uz: 'Dermatologiya — akne, psoriaz, vitiligo, ekzema',
    ru: 'Дерматология — акне, псориаз, витилиgo, экзема',
    en: 'Dermatology — acne, psoriasis, vitiligo, eczema',
  },
  {
    id: 'apparatnaya-kosmetologiya',
    icon: Sparkles,
    uz: 'Apparatli kosmetologiya — IPL, lazer',
    ru: 'Аппаратная косметология — IPL, лазер',
    en: 'Device cosmetology — IPL, laser',
  },
  {
    id: 'lazernaya-epilyaciya',
    icon: Zap,
    uz: 'Lazer epilyatsiya',
    ru: 'Лазерная эпиляция',
    en: 'Laser hair removal',
  },
  {
    id: 'dermatologiya',
    icon: Sun,
    uz: 'Fototerapiya (Daavlin) — vitiligo, psoriaz',
    ru: 'Фототерапия (Daavlin) — витилиgo, псoriasis',
    en: 'Phototherapy (Daavlin) — vitiligo, psoriasis',
  },
];

const ARTICLES = [
  { id: 'art-akne', uz: 'Akne davolash', ru: 'Лечение акне', en: 'Acne treatment' },
  { id: 'art-ipl-terapiya', uz: 'IPL terapiya Farg‘ona', ru: 'IPL-терапия Фергана', en: 'IPL therapy Fergana' },
  { id: 'art-deka-moveo-fergana-faq', uz: 'DEKA MOVEO lazer', ru: 'Лазер DEKA MOVEO', en: 'DEKA MOVEO laser' },
  { id: 'art-vitiligo-daavlin', uz: 'Vitiligo davolash', ru: 'Лечение витилиgo', en: 'Vitiligo treatment' },
];

function copy(locale: Locale) {
  if (locale === 'uz') {
    return {
      badge: 'Radeski Skin Clinic — Farg‘ona bosh klinikasi',
      h1: 'Dermatolog Farg‘ona | Radeski Skin Clinic',
      lead:
        'Teri, soch va tirnoqlar bo‘yicha ixtisoslashgan klinika: dermatologiya, trixologiya, podologiya, IPL, lazer va fototerapiya. Manzil: O‘zbekiston Ovozi ko‘chasi, 1A.',
      address: "Farg'ona sh., O'zbekiston Ovozi ko'chasi, 1A-bino",
      hours: 'Dushanba – Shanba: 08:00 – 18:00',
      servicesTitle: 'Farg‘onada xizmatlar',
      commercialTitle: 'Farg‘ona bo‘yicha qidiruv sahifalari',
      articlesTitle: 'Farg‘ona uchun foydali maqolalar',
      mapCta: 'Xaritada ochish',
      allBranches: 'Barcha filiallar',
      whyTitle: 'Nima uchun Farg‘onada Radeski?',
      faqTitle: 'Tez-tez so‘raladigan savollar',
      faqs: [
        {
          q: 'Farg‘onada dermatolog qayerda?',
          a: 'Radeski Skin Clinic bosh klinikasi: O‘zbekiston Ovozi ko‘chasi, 1A. Telefon: +998 (73) 200-73-73.',
        },
        {
          q: 'Farg‘onada trixolog va podolog bormi?',
          a: 'Ha. Dermatologiya, trixologiya, podologiya, dermatoskopiya va apparat muolajalari bir klinikada.',
        },
        {
          q: 'Qabulga qanday yozilaman?',
          a: 'Saytdagi «Qabulga yozilish» tugmasi yoki +998 (73) 200-73-73 raqami orqali.',
        },
      ],
    };
  }
  if (locale === 'ru') {
    return {
      badge: 'Radeski Skin Clinic — главная клиника в Фергане',
      h1: 'Дерматолог Фергана | Radeski Skin Clinic',
      lead:
        'Специализированная клиника кожи, волос и ногтей: дерматология, трихология, подология, IPL, лазер и фототерапия. Адрес: ул. Узбекистон Овози, 1А.',
      address: 'г. Фергана, ул. Узбекистон Овози, дом 1А',
      hours: 'Понедельник – Суббота: 08:00 – 18:00',
      servicesTitle: 'Услуги в Фергане',
      commercialTitle: 'Коммерческие страницы по Фергане',
      articlesTitle: 'Полезные статьи для Ферганы',
      mapCta: 'Открыть на карте',
      allBranches: 'Все филиалы',
      whyTitle: 'Почему Radeski в Фергане?',
      faqTitle: 'Частые вопросы',
      faqs: [
        {
          q: 'Где дерматолог в Фергане?',
          a: 'Главная клиника Radeski Skin Clinic: ул. Узбекистон Овози, 1А. Тел: +998 (73) 200-73-73.',
        },
        {
          q: 'Есть ли трихолог и подолог в Фергане?',
          a: 'Да. Дерматология, трихология, подология, дерматоскопия и аппаратные процедуры в одной клинике.',
        },
        {
          q: 'Как записаться на приём?',
          a: 'Через кнопку «Записаться» на сайте или по телефону +998 (73) 200-73-73.',
        },
      ],
    };
  }
  return {
    badge: 'Radeski Skin Clinic — Fergana main clinic',
    h1: 'Dermatologist Fergana | Radeski Skin Clinic',
    lead:
      'Specialized clinic for skin, hair and nails: dermatology, trichology, podology, IPL, laser and phototherapy. Address: 1A Uzbekiston Ovozi St.',
    address: '1A Uzbekiston Ovozi St., Fergana City',
    hours: 'Monday – Saturday: 08:00 – 18:00',
    servicesTitle: 'Services in Fergana',
    commercialTitle: 'Fergana search landing pages',
    articlesTitle: 'Helpful articles for Fergana',
    mapCta: 'Open on map',
    allBranches: 'All branches',
    whyTitle: 'Why Radeski in Fergana?',
    faqTitle: 'FAQ',
    faqs: [
      {
        q: 'Where to find a dermatologist in Fergana?',
        a: 'Radeski Skin Clinic main branch: 1A Uzbekiston Ovozi St. Phone: +998 (73) 200-73-73.',
      },
      {
        q: 'Are trichologist and podiatrist available?',
        a: 'Yes — dermatology, trichology, podology, dermoscopy and device treatments in one clinic.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'Use Book online on the website or call +998 (73) 200-73-73.',
      },
    ],
  };
}

export default function FerganaLandingPage({ locale, appointmentLabel }: FerganaLandingPageProps) {
  const t = copy(locale);
  const commercialLinks = getCityCommercialLinks('fargona');

  return (
    <section id="fergana-landing" className="py-12 bg-brand-offwhite min-h-screen">
      <div className="site-container max-w-4xl">
        <span className="inline-flex text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
          {t.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-4 leading-tight">
          {t.h1}
        </h1>
        <p className="mt-4 text-brand-text-secondary text-sm sm:text-base leading-relaxed max-w-3xl">{t.lead}</p>
        <p className="mt-3 text-sm text-brand-text-muted leading-relaxed max-w-3xl">
          {getLocalizedCopy(POSITIONING_FORMULA, locale)}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <AppointmentBookingLink className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm rounded-xl no-underline shadow-md">
            {appointmentLabel}
          </AppointmentBookingLink>
          <a
            href={`tel:${CLINIC_PHONE_PRIMARY.tel}`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-sectiongray bg-brand-white text-brand-text-primary font-semibold text-sm rounded-xl no-underline"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            {CLINIC_PHONE_PRIMARY.display}
          </a>
          <Link
            to={pagePath(locale, 'branches')}
            className="inline-flex items-center gap-2 px-6 py-3 text-brand-gold font-semibold text-sm no-underline"
          >
            {t.allBranches}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <li className="flex gap-2 p-4 bg-brand-white rounded-xl border border-brand-sectiongray text-sm">
            <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            <span>{t.address}</span>
          </li>
          <li className="flex gap-2 p-4 bg-brand-white rounded-xl border border-brand-sectiongray text-sm">
            <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            <a
              href={`tel:${CLINIC_PHONE_PRIMARY.tel}`}
              className="text-brand-text-primary no-underline hover:text-brand-gold"
            >
              {CLINIC_PHONE_PRIMARY.display}
            </a>
          </li>
          <li className="flex gap-2 p-4 bg-brand-white rounded-xl border border-brand-sectiongray text-sm">
            <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            <span>{t.hours}</span>
          </li>
        </ul>

        <a
          href={getClinicMapOpenUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold"
        >
          {t.mapCta} <ArrowRight className="w-3.5 h-3.5" />
        </a>

        <h2 className="mt-12 text-xl sm:text-2xl font-extrabold text-brand-text-primary">{t.whyTitle}</h2>
        <ul className="mt-4 space-y-2">
          {COMPETITIVE_ADVANTAGES.map((item) => (
            <li key={item.uz} className="flex gap-2 text-sm text-brand-text-secondary">
              <span className="text-brand-gold font-bold">✓</span>
              {getLocalizedCopy(item, locale)}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl sm:text-2xl font-extrabold text-brand-text-primary">{t.commercialTitle}</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {commercialLinks.map((item) => (
            <Link
              key={item.slug}
              to={localCommercialPath(locale, 'fargona', item.slug)}
              className="p-4 bg-brand-white rounded-xl border border-brand-sectiongray hover:border-brand-gold/40 text-sm font-semibold text-brand-text-primary no-underline"
            >
              {getLocalizedCopy(item.h1, locale)}
            </Link>
          ))}
        </div>

        <h2 className="mt-12 text-xl sm:text-2xl font-extrabold text-brand-text-primary">{t.servicesTitle}</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const label = locale === 'uz' ? s.uz : locale === 'ru' ? s.ru : s.en;
            return (
              <Link
                key={`${s.id}-${i}`}
                to={
                  i === 3
                    ? serviceSubPath(locale, 'dermatologiya', 'fototerapiya')
                    : serviceCategoryPath(locale, s.id)
                }
                className="flex items-start gap-3 p-4 bg-brand-white rounded-xl border border-brand-sectiongray hover:border-brand-gold/40 transition-colors no-underline"
              >
                <Icon className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-text-primary">{label}</span>
              </Link>
            );
          })}
        </div>

        <h2 className="mt-12 text-xl sm:text-2xl font-extrabold text-brand-text-primary">{t.articlesTitle}</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ARTICLES.map((a) => (
            <Link
              key={a.id}
              to={articlePath(locale, resolveArticleRouteKey(a))}
              className="p-4 bg-brand-white rounded-xl border border-brand-sectiongray hover:border-brand-gold/40 text-sm font-semibold text-brand-text-primary no-underline"
            >
              {locale === 'uz' ? a.uz : locale === 'ru' ? a.ru : a.en}
            </Link>
          ))}
        </div>

        <h2 className="mt-12 text-xl sm:text-2xl font-extrabold text-brand-text-primary">{t.faqTitle}</h2>
        <div className="mt-4 space-y-3">
          {t.faqs.map((f) => (
            <details key={f.q} className="p-4 bg-brand-white rounded-xl border border-brand-sectiongray group">
              <summary className="font-semibold text-sm text-brand-text-primary cursor-pointer list-none flex justify-between gap-2">
                {f.q}
                <span className="text-brand-gold group-open:rotate-90 transition-transform">›</span>
              </summary>
              <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-sm text-brand-text-muted">
          {locale === 'uz' ? "Qo'qon filiali: " : locale === 'ru' ? 'Филиал в Коканде: ' : 'Kokand branch: '}
          <Link to={pagePath(locale, 'qoqon')} className="text-brand-gold font-semibold no-underline hover:underline">
            {locale === 'uz' ? 'Dermatolog Qo‘qon' : locale === 'ru' ? 'Дерматолог Коканд' : 'Dermatologist Kokand'}
          </Link>
        </p>
      </div>
    </section>
  );
}
