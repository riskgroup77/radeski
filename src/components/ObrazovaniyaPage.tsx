import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import type { Locale } from '../types';
import { OBRAZOVANIYA } from '../data/obrazovaniyaContent';
import {
  EDUCATION_OVERVIEW_IMAGES,
  EDUCATION_PROGRAM_IMAGES,
  educationProgramPath,
  resolveEducationProgram,
} from '../utils/educationPrograms';
import EducationMediaFrame from './EducationMediaFrame';
import EducationOverlayHero from './EducationOverlayHero';
import { openAppointmentBooking } from '../config/links';

interface ObrazovaniyaPageProps {
  locale: Locale;
}

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      {eyebrow ? (
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-gold">{eyebrow}</span>
      ) : null}
      <h2 className="text-xl font-extrabold leading-tight tracking-tight text-brand-text-primary sm:text-2xl lg:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function ObrazovaniyaPage({ locale }: ObrazovaniyaPageProps) {
  const c = OBRAZOVANIYA;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hashId = location.hash.replace('#', '').trim();
    if (!hashId) return;
    const program =
      resolveEducationProgram(hashId, locale) ??
      c.programs.items.find((item) => item.id === hashId) ??
      null;
    if (program) {
      navigate(educationProgramPath(locale, program.id), { replace: true });
    }
  }, [location.hash, locale, navigate, c.programs.items]);

  const readMoreLabel =
    locale === 'uz' ? 'Batafsil sahifa' : locale === 'ru' ? 'Подробная страница' : 'View program page';

  return (
    <section id="obrazovaniya-page" className="min-h-screen bg-brand-offwhite pb-12 sm:pb-16">
      <EducationOverlayHero
        image={EDUCATION_OVERVIEW_IMAGES.hero}
        imageAlt={
          locale === 'uz'
            ? "Radeski Skin Clinic ta'lim markazi — dermatologiya va estetik tibbiyot"
            : locale === 'ru'
              ? 'Образовательный центр Radeski Skin Clinic — дерматология и эстетическая медицина'
              : 'Radeski Skin Clinic education center — dermatology and aesthetic medicine'
        }
        eyebrow={c.eyebrow[locale]}
        title={c.title[locale]}
        titleAccent={c.subtitle[locale]}
        description={c.heroIntro[locale]}
      />

      <div className="mb-10 border-b border-brand-sectiongray bg-brand-white sm:mb-14">
        <div className="site-container py-6 sm:py-8">
          <p className="max-w-3xl border-l-4 border-brand-gold pl-4 text-sm font-light leading-relaxed text-brand-text-secondary sm:pl-5 sm:text-base">
            {c.heroDescription[locale]}
          </p>
          <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
            {c.environment[locale]}
          </p>
        </div>
      </div>

      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-gold/25 bg-brand-white shadow-sm sm:mb-16"
        >
          <EducationMediaFrame src={EDUCATION_OVERVIEW_IMAGES.formula} alt="" variant="banner" imageClassName="object-[center_40%]">
            <div className="absolute inset-0 bg-brand-dark-navy/82" />
            <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-gold">{c.formulaTitle[locale]}</p>
              <div className="flex flex-wrap items-center gap-2">
                {c.formulaSteps.map((step, index) => (
                  <div key={step.uz} className="flex items-center gap-2">
                    <span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white sm:text-sm">
                      {step[locale]}
                    </span>
                    {index < c.formulaSteps.length - 1 ? (
                      <ChevronRight className="hidden h-4 w-4 text-brand-gold sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </EducationMediaFrame>
        </motion.div>

        <div className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-2">
          <OverviewCard eyebrow={c.forWho.title[locale]} title={c.forWho.intro[locale]}>
            <ul className="space-y-2">
              {c.forWho.audience.map((item) => (
                <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  {item[locale]}
                </li>
              ))}
            </ul>
          </OverviewCard>

          <OverviewCard eyebrow={c.advantages.title[locale]} title={c.advantages.title[locale]}>
            <ul className="space-y-2">
              {c.advantages.items.map((item) => (
                <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  {item[locale]}
                </li>
              ))}
            </ul>
          </OverviewCard>
        </div>

        <SectionHeading title={c.programs.title[locale]} />
        <div className="mb-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 sm:mb-16">
          {c.programs.items.map((program, index) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.03 }}
              className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-white shadow-sm"
            >
              <EducationMediaFrame
                src={EDUCATION_PROGRAM_IMAGES[program.id]}
                alt={program.title[locale]}
                variant="card"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/90 via-brand-dark-navy/25 to-transparent" />
                <div className="absolute left-4 top-4 rounded-xl bg-brand-dark-navy/85 px-3 py-1.5">
                  <span className="text-sm font-extrabold text-brand-gold">{program.num}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-extrabold leading-snug text-white">{program.title[locale]}</h3>
                </div>
              </EducationMediaFrame>
              <div className="p-4 sm:p-5">
                <p className="mb-4 line-clamp-3 text-sm font-light leading-relaxed text-brand-text-secondary">
                  {program.info[locale]}
                </p>
                <Link
                  to={educationProgramPath(locale, program.id)}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-bold text-white no-underline transition-colors hover:bg-brand-gold-dark"
                >
                  {readMoreLabel}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-brand-gold/25 bg-gradient-to-br from-brand-dark-navy via-brand-dark-navy to-brand-gold/20 p-6 text-center sm:p-10"
        >
          <h2 className="text-xl font-extrabold text-white sm:text-2xl">{c.cta.title[locale]}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-light leading-relaxed text-white/85 sm:text-base">{c.cta.desc[locale]}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openAppointmentBooking()}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand-gold px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark"
            >
              {locale === 'uz' ? 'Qabulga yozilish' : locale === 'ru' ? 'Записаться' : 'Book appointment'}
            </button>
            <a
              href={`tel:${c.cta.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-white/15"
            >
              <Phone className="h-4 w-4" />
              {c.cta.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OverviewCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-brand-sectiongray bg-brand-white p-6 shadow-sm sm:p-8"
    >
      <SectionHeading eyebrow={eyebrow} title={title} />
      {children}
    </motion.article>
  );
}
