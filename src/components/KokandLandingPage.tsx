import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, Stethoscope, Sparkles, Zap, Sun } from 'lucide-react';
import type { Locale } from '../types';
import { CLINIC_PHONE_KOKAND } from '../config/clinicContacts';
import { KOKAND_BRANCH_MAP_OPEN_URL } from '../config/links';
import { pagePath, serviceCategoryPath, serviceSubPath, articlePath, doctorPath } from '../routing/paths';
import {
  COMPETITIVE_ADVANTAGES,
  POSITIONING_FORMULA,
  getCityCommercialLinks,
  getLocalizedCopy,
  localCommercialPath,
} from '../data/localCommercialSeoCatalog';
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
  { id: 'art-alopecia-areata-klinik-holat', uz: "Soch to'kilishi — klinik holat", ru: 'Выпадение волос — клинический случай', en: 'Hair loss — clinical case' },
  { id: 'art-trixolog-trixoskopiya', uz: 'Trixolog va trixoskopiya', ru: 'Трихolog и трихоскопия', en: 'Trichologist and trichoscopy' },
  { id: 'art-onixokriptoz-klinik-holat', uz: 'Onixokriptoz — klinik holat', ru: 'Онихокриптоз — клинический случай', en: 'Ingrown nail — clinical case' },
  { id: 'art-lasemd-ultra-kokand', uz: 'LaseMD Ultra Qo‘qon', ru: 'LaseMD Ultra Коканд', en: 'LaseMD Ultra Kokand' },
  { id: 'art-bazalioma-teri-raki', uz: 'Bazalioma va dermatoskopiya', ru: 'Базалиoma и дерматоскопия', en: 'Basal cell carcinoma screening' },
];

const KOKAND_DOCTORS = [
  {
    id: '9285e6b7-e5c0-4c51-9c7a-00fd3a4af62f',
    uz: "Turg'unov Shohruz — dermatovenerolog-trixolog",
    ru: 'Тургунов Шохруз — дерматовenerolog-трихolog',
    en: 'Dr. Shohruz Turgunov — dermatovenereologist-trichologist',
  },
];

const SEO_CLUSTERS: { title: { uz: string; ru: string; en: string }; slugs: string[] }[] = [
  {
    title: { uz: 'Kasalliklar', ru: 'Заболевания', en: 'Conditions' },
    slugs: ['akne-davolash', 'psoriaz-davolash', 'vitiligo-davolash', 'rozasea-davolash'],
  },
  {
    title: { uz: 'Diagnostika', ru: 'Диагностика', en: 'Diagnostics' },
    slugs: ['dermatoskopiya', 'xol-tekshiruvi', 'biopsiya', 'onko-dermatolog'],
  },
  {
    title: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
    slugs: ['trixolog', 'soch-tokilish', 'trixoskopiya'],
  },
  {
    title: { uz: 'Mutaxassislar', ru: 'Специалисты', en: 'Specialists' },
    slugs: ['dermatolog', 'podolog'],
  },
];

function copy(locale: Locale) {
  if (locale === 'uz') {
    return {
      badge: 'Radeski Skin Clinic — Qo‘qon filiali',
      h1: 'Dermatolog Qo‘qon | Radeski Skin Clinic',
      lead:
        'Teri, soch va tirnoqlar bo‘yicha ixtisoslashgan klinika: dermatologiya, trixologiya, podologiya, dermatoskopiya, onkodermatologiya, IPL, lazer epilyatsiya va fototerapiya. Qo‘qon filialida alohida SEO-klastrlar: akne, psoriaz, vitiligo, rozasea, trixoskopiya, xol tekshiruvi, biopsiya. Manzil: 47-MFI, Huqandiy mavzesi, 144A.',
      address: "Qo'qon sh., 47-MFI, Huqandiy mavzesi, 144A",
      hours: 'Dushanba – Shanba: 08:00 – 18:00',
      servicesTitle: 'Qo‘qonda xizmatlar',
      commercialTitle: 'Qo‘qon bo‘yicha qidiruv sahifalari',
      clustersTitle: 'Qo‘qon SEO yo‘nalishlari',
      doctorsTitle: 'Qo‘qon filialidagi mutaxassislar',
      articlesTitle: 'Qo‘qon uchun foydali maqolalar',
      mapCta: 'Xaritada ochish',
      allBranches: 'Barcha filiallar',
      whyTitle: 'Nima uchun Qo‘qonda Radeski?',
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
        'Специализированная клиника кожи, волос и ногтей в Коканде: дерматология, трихология, подология, дерматоскопия, онкодermatология, IPL, лазерная эпиляция и фототерапия. Отдельные страницы по акне, псoriasis, витилиgo, розацеа, трихоскопии, проверке родинок и биопсии. Адрес: 47-МФЙ, массив Хукандий, 144А.',
      address: 'г. Коканд, 47-МФЙ, массив Хукандий, 144А',
      hours: 'Понедельник – Суббота: 08:00 – 18:00',
      servicesTitle: 'Услуги в Коканде',
      commercialTitle: 'Коммерческие страницы по Коканду',
      clustersTitle: 'SEO-направления Коканда',
      doctorsTitle: 'Специалисты филиала в Коканде',
      articlesTitle: 'Полезные статьи для Коканда',
      mapCta: 'Открыть на карте',
      allBranches: 'Все филиалы',
      whyTitle: 'Почему Radeski в Коканде?',
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
      'Specialized skin, hair and nail clinic in Kokand: dermatology, trichology, podology, dermoscopy, oncodermatology, IPL, laser hair removal and phototherapy. Dedicated pages for acne, psoriasis, vitiligo, rosacea, trichoscopy, mole screening and biopsy. Address: 47-MFI, Huqandiy Block, 144A.',
    address: '144A Huqandiy Block, 47-MFI, Kokand City',
    hours: 'Monday – Saturday: 08:00 – 18:00',
    servicesTitle: 'Services in Kokand',
    commercialTitle: 'Kokand search landing pages',
    clustersTitle: 'Kokand SEO clusters',
    doctorsTitle: 'Specialists at Kokand branch',
    articlesTitle: 'Helpful articles for Kokand',
    mapCta: 'Open on map',
    allBranches: 'All branches',
    whyTitle: 'Why Radeski in Kokand?',
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
  const commercialLinks = getCityCommercialLinks('qoqon');

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
        <p className="mt-3 text-sm text-brand-text-muted leading-relaxed max-w-3xl">
          {getLocalizedCopy(POSITIONING_FORMULA, locale)}
        </p>

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
          {COMPETITIVE_ADVANTAGES.map((item) => (
            <li key={item.uz} className="flex gap-2 text-sm text-brand-text-secondary">
              <span className="text-brand-gold font-bold">✓</span>
              {getLocalizedCopy(item, locale)}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl sm:text-2xl font-extrabold text-brand-text-primary">{t.clustersTitle}</h2>
        <div className="mt-4 space-y-6">
          {SEO_CLUSTERS.map((cluster) => {
            const links = commercialLinks.filter((item) => cluster.slugs.includes(item.slug));
            if (!links.length) return null;
            const title = locale === 'uz' ? cluster.title.uz : locale === 'ru' ? cluster.title.ru : cluster.title.en;
            return (
              <div key={cluster.title.uz}>
                <h3 className="text-sm font-bold text-brand-gold uppercase tracking-wide mb-2">{title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {links.map((item) => (
                    <Link
                      key={item.slug}
                      to={localCommercialPath(locale, 'qoqon', item.slug)}
                      className="p-3 bg-brand-white rounded-xl border border-brand-sectiongray hover:border-brand-gold/40 text-sm font-semibold text-brand-text-primary no-underline"
                    >
                      {getLocalizedCopy(item.h1, locale)}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="mt-12 text-xl sm:text-2xl font-extrabold text-brand-text-primary">{t.doctorsTitle}</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {KOKAND_DOCTORS.map((doc) => (
            <Link
              key={doc.id}
              to={doctorPath(locale, doc.id)}
              className="p-4 bg-brand-white rounded-xl border border-brand-sectiongray hover:border-brand-gold/40 text-sm font-semibold text-brand-text-primary no-underline"
            >
              {locale === 'uz' ? doc.uz : locale === 'ru' ? doc.ru : doc.en}
            </Link>
          ))}
          <Link
            to={pagePath(locale, 'doctors')}
            className="p-4 bg-brand-gold-light/10 rounded-xl border border-brand-gold/20 text-sm font-semibold text-brand-gold no-underline"
          >
            {locale === 'uz' ? 'Barcha shifokorlar →' : locale === 'ru' ? 'Все врачи →' : 'All doctors →'}
          </Link>
        </div>

        <h2 className="mt-12 text-xl sm:text-2xl font-extrabold text-brand-text-primary">{t.commercialTitle}</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {commercialLinks.map((item) => (
            <Link
              key={item.slug}
              to={localCommercialPath(locale, 'qoqon', item.slug)}
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
          {locale === 'uz' ? "Farg'ona filiali: " : locale === 'ru' ? 'Филиал в Фергане: ' : 'Fergana branch: '}
          <Link to={pagePath(locale, 'fargona')} className="text-brand-gold font-semibold no-underline hover:underline">
            {locale === 'uz' ? 'Dermatolog Farg‘ona' : locale === 'ru' ? 'Дерматолог Фергана' : 'Dermatologist Fergana'}
          </Link>
        </p>
      </div>
    </section>
  );
}
