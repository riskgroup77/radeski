import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, Stethoscope, Sparkles, Zap, Sun } from 'lucide-react';
import type { Locale } from '../types';
import { CLINIC_PHONE_KOKAND } from '../config/clinicContacts';
import { KOKAND_BRANCH_MAP_OPEN_URL } from '../config/links';
import { pagePath, serviceCategoryPath, serviceSubPath, articlePath } from '../routing/paths';
import { resolveArticleRouteKey } from '../utils/articles';
import AppointmentBookingLink from './AppointmentBookingLink';

interface KokandLandingPageProps {
  locale: Locale;
  appointmentLabel: string;
}

const SERVICES: { id: string; icon: typeof Stethoscope; uz: string; ru: string; en: string }[] = [
  {
    id: 'dermatologiya',
    icon: Stethoscope,
    uz: 'Dermatologiya — akne, psoriaz, vitiligo, ekzema',
    ru: 'Дерматология — акне, псориаз, витилиго, экзема',
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
    ru: 'Фототерапия (Daavlin) — витилиго, псориаз',
    en: 'Phototherapy (Daavlin) — vitiligo, psoriasis',
  },
];

const ARTICLES = [
  { id: 'art-pryshchi-u-vzroslykh', uz: 'Kattalarda akne', ru: 'Акне у взрослых', en: 'Adult acne' },
  { id: 'art-psoriasis-daavlin-kokand', uz: 'Psoriaz — Daavlin Qo‘qon', ru: 'Псориаз — Daavlin Коканд', en: 'Psoriasis — Daavlin Kokand' },
  { id: 'art-vitiligo-daavlin', uz: 'Vitiligo davolash', ru: 'Лечение витилиго', en: 'Vitiligo treatment' },
  { id: 'art-ipl-terapiya', uz: 'IPL terapiya', ru: 'IPL-терапия', en: 'IPL therapy' },
];

function copy(locale: Locale) {
  if (locale === 'uz') {
    return {
      badge: 'Radeski Skin Clinic — Qo‘qon filiali',
      h1: 'Dermatolog Qo‘qon | Radeski Skin Clinic',
      lead:
        'Qo‘qonda dermatologiya, kosmetologiya, IPL, lazer epilyatsiya va fototerapiya. Manzil: 47-MFI, Huqandiy mavzesi, 144A. Malakali shifokorlar, zamonaviy apparatlar.',
      address: "Qo'qon sh., 47-MFI, Huqandiy mavzesi, 144A",
      hours: 'Dushanba – Shanba: 08:00 – 18:00',
      servicesTitle: 'Qo‘qonda xizmatlar',
      articlesTitle: 'Qo‘qon uchun foydali maqolalar',
      mapCta: 'Xaritada ochish',
      allBranches: 'Barcha filiallar',
      whyTitle: 'Nima uchun Qo‘qonda Radeski?',
      why: [
        'Dermatolog konsultatsiyasi va kompleks davolash bir joyda',
        'IPL, lazer, fototerapiya (Daavlin) — zamonaviy uskunalar',
        'Farg‘ona bosh klinikasi bilan bir xil sifat standarti',
        'Qulay manzil: Huqandiy mavzesi, 144A',
      ],
      faqTitle: 'Tez-tez so‘raladigan savollar',
      faqs: [
        {
          q: 'Qo‘qonda dermatolog qayerda?',
          a: 'Radeski Skin Clinic Qo‘qon filiali: 47-MFI, Huqandiy mavzesi, 144A. Telefon: +998 95 210 73 73.',
        },
        {
          q: 'Qo‘qonda akne va kosmetologiya bormi?',
          a: 'Ha. Dermatologiya, apparatli kosmetologiya (IPL), lazer epilyatsiya, fototerapiya va inyeksiyalar mavjud.',
        },
        {
          q: 'Qabulga qanday yozilaman?',
          a: 'Saytdagi «Qabulga yozilish» orqali yoki +998 95 210 73 73 raqamiga qo‘ng‘iroq qiling.',
        },
      ],
    };
  }
  if (locale === 'ru') {
    return {
      badge: 'Radeski Skin Clinic — филиал в Коканде',
      h1: 'Дерматолог Коканд | Radeski Skin Clinic',
      lead:
        'Дерматология, косметология, IPL, лазерная эпиляция и фототерапия в Коканде. Адрес: 47-МФЙ, массив Хукандий, 144А. Квалифицированные врачи и современное оборудование.',
      address: 'г. Коканд, 47-МФЙ, массив Хукандий, 144А',
      hours: 'Понедельник – Суббота: 08:00 – 18:00',
      servicesTitle: 'Услуги в Коканде',
      articlesTitle: 'Полезные статьи для Коканда',
      mapCta: 'Открыть на карте',
      allBranches: 'Все филиалы',
      whyTitle: 'Почему Radeski в Коканде?',
      why: [
        'Консультация дерматолога и комплексное лечение в одном месте',
        'IPL, лазер, фототерапия (Daavlin) — современное оборудование',
        'Тот же стандарт качества, что и в клинике в Фергане',
        'Удобный адрес: массив Хукандий, 144А',
      ],
      faqTitle: 'Частые вопросы',
      faqs: [
        {
          q: 'Где дерматолог в Коканде?',
          a: 'Филиал Radeski Skin Clinic: 47-МФЙ, массив Хукандий, 144А. Телефон: +998 95 210 73 73.',
        },
        {
          q: 'Есть ли лечение акне и косметология в Коканде?',
          a: 'Да. Дерматология, аппаратная косметология (IPL), лазерная эпиляция, фототерапия и инъекции.',
        },
        {
          q: 'Как записаться на приём?',
          a: 'Через кнопку «Записаться» на сайте или по телефону +998 95 210 73 73.',
        },
      ],
    };
  }
  return {
    badge: 'Radeski Skin Clinic — Kokand branch',
    h1: 'Dermatologist Kokand | Radeski Skin Clinic',
    lead:
      'Dermatology, cosmetology, IPL, laser hair removal and phototherapy in Kokand. Address: 47-MFI, Huqandiy Block, 144A. Qualified doctors and modern equipment.',
    address: '144A Huqandiy Block, 47-MFI, Kokand City',
    hours: 'Monday – Saturday: 08:00 – 18:00',
    servicesTitle: 'Services in Kokand',
    articlesTitle: 'Helpful articles for Kokand',
    mapCta: 'Open on map',
    allBranches: 'All branches',
    whyTitle: 'Why Radeski in Kokand?',
    why: [
      'Dermatologist consultation and full treatment in one place',
      'IPL, laser, phototherapy (Daavlin) — modern equipment',
      'Same quality standard as the Fergana main clinic',
      'Convenient location: Huqandiy Block, 144A',
    ],
    faqTitle: 'FAQ',
    faqs: [
      {
        q: 'Where to find a dermatologist in Kokand?',
        a: 'Radeski Skin Clinic Kokand branch: 47-MFI, Huqandiy Block, 144A. Phone: +998 95 210 73 73.',
      },
      {
        q: 'Is acne and cosmetology available in Kokand?',
        a: 'Yes — dermatology, device cosmetology (IPL), laser hair removal, phototherapy and injectables.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'Use Book online on the website or call +998 95 210 73 73.',
      },
    ],
  };
}

export default function KokandLandingPage({ locale, appointmentLabel }: KokandLandingPageProps) {
  const t = copy(locale);

  return (
    <section id="kokand-landing" className="py-12 bg-brand-offwhite min-h-screen">
      <div className="site-container max-w-4xl">
        <span className="inline-flex text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
          {t.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-4 leading-tight">
          {t.h1}
        </h1>
        <p className="mt-4 text-brand-text-secondary text-sm sm:text-base leading-relaxed max-w-3xl">{t.lead}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <AppointmentBookingLink className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm rounded-xl no-underline shadow-md">
            {appointmentLabel}
          </AppointmentBookingLink>
          <a
            href={`tel:${CLINIC_PHONE_KOKAND.tel}`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-sectiongray bg-brand-white text-brand-text-primary font-semibold text-sm rounded-xl no-underline"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            {CLINIC_PHONE_KOKAND.display}
          </a>
          <Link
            to={pagePath(locale, 'branches')}
            className="inline-flex items-center gap-2 px-6 py-3 text-brand-gold font-semibold text-sm"
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
            <a href={`tel:${CLINIC_PHONE_KOKAND.tel}`} className="text-brand-text-primary no-underline hover:text-brand-gold">
              {CLINIC_PHONE_KOKAND.display}
            </a>
          </li>
          <li className="flex gap-2 p-4 bg-brand-white rounded-xl border border-brand-sectiongray text-sm">
            <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            <span>{t.hours}</span>
          </li>
        </ul>

        <a
          href={KOKAND_BRANCH_MAP_OPEN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold"
        >
          {t.mapCta} <ArrowRight className="w-3.5 h-3.5" />
        </a>

        <h2 className="mt-12 text-xl sm:text-2xl font-extrabold text-brand-text-primary">{t.whyTitle}</h2>
        <ul className="mt-4 space-y-2">
          {t.why.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-brand-text-secondary">
              <span className="text-brand-gold font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>

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
      </div>
    </section>
  );
}
