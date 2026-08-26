import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Award,
  Briefcase,
  Calendar,
  Check,
  CornerUpLeft,
  FlaskConical,
  GraduationCap,
  MapPin,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import {
  Locale,
  Doctor,
  DoctorProfileContent,
  DoctorProfileSection,
  DoctorProfileSubsection,
} from '../types';
import { DICTIONARY } from '../data';
import { doctorsListPath } from '../routing/paths';
import MediaImage from './MediaImage';

interface DoctorPageProps {
  locale: Locale;
  doctorId: string;
  doctors: Doctor[];
  dictionary?: Record<string, string>;
  onBackToList: () => void;
  onOpenAppointment: () => void;
}

function ItemChips({ items, columns = 3 }: { items: string[]; columns?: 2 | 3 | 4 }) {
  const colClass =
    columns === 4
      ? 'sm:grid-cols-3 lg:grid-cols-4'
      : columns === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-1.5`}>
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-start gap-1.5 rounded-lg bg-brand-offwhite/80 border border-brand-sectiongray/60 px-2.5 py-1.5 text-[11px] sm:text-xs leading-snug text-brand-text-secondary"
        >
          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
}

function SpecialtyTabs({ subsections }: { subsections: DoctorProfileSubsection[] }) {
  const [active, setActive] = useState(0);
  const current = subsections[active];

  return (
    <div className="rounded-2xl border border-brand-sectiongray bg-brand-white p-4 sm:p-5">
      <div className="flex flex-wrap gap-2 mb-4">
        {subsections.map((subsection, index) => (
          <button
            key={subsection.title}
            type="button"
            onClick={() => setActive(index)}
            className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
              active === index
                ? 'bg-brand-gold text-white shadow-sm'
                : 'bg-brand-offwhite text-brand-text-secondary hover:bg-brand-sectiongray/70'
            }`}
          >
            {subsection.title}
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                active === index ? 'bg-white/20 text-white' : 'bg-white text-brand-gold'
              }`}
            >
              {subsection.items.length}
            </span>
          </button>
        ))}
      </div>
      <ItemChips items={current.items} columns={3} />
    </div>
  );
}

function InfoCard({
  title,
  icon: Icon,
  paragraphs,
  accent = false,
}: {
  title: string;
  icon: typeof Check;
  paragraphs: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 h-full ${
        accent
          ? 'border-brand-gold/30 bg-gradient-to-br from-brand-gold-light/15 to-brand-offwhite'
          : 'border-brand-sectiongray bg-brand-white'
      }`}
    >
      <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-brand-text-primary mb-3">
        <Icon className="h-4 w-4 text-brand-gold shrink-0" />
        {title}
      </h3>
      <div className="space-y-2">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-xs sm:text-sm leading-relaxed text-brand-text-secondary font-light">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function DoctorProfileDetails({ profile }: { profile: DoctorProfileContent }) {
  const { specialtySection, diagnosticsSection, infoSections } = useMemo(() => {
    let specialty: DoctorProfileSection | undefined;
    let diagnostics: DoctorProfileSection | undefined;
    const info: DoctorProfileSection[] = [];

    for (const section of profile.sections) {
      if (section.subsections?.length) specialty = section;
      else if (section.items?.length) diagnostics = section;
      else if (section.paragraphs?.length) info.push(section);
    }

    return {
      specialtySection: specialty,
      diagnosticsSection: diagnostics,
      infoSections: info,
    };
  }, [profile.sections]);

  const infoIcons = [Stethoscope, GraduationCap, MapPin];

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="rounded-2xl border border-brand-sectiongray bg-brand-offwhite/40 p-4 sm:p-5">
        <h2 className="text-xs font-extrabold uppercase tracking-wide text-brand-text-primary flex items-center gap-2 mb-3">
          <Check className="h-4 w-4 text-brand-gold" />
          {profile.aboutTitle}
        </h2>
        <div className="space-y-2">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-xs sm:text-sm leading-relaxed text-brand-text-secondary font-light">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {specialtySection?.subsections && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-text-muted mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            {specialtySection.title}
          </h2>
          <SpecialtyTabs subsections={specialtySection.subsections} />
        </div>
      )}

      {diagnosticsSection?.items && (
        <div className="rounded-2xl border border-brand-sectiongray bg-brand-white p-4 sm:p-5">
          <h2 className="text-xs font-extrabold uppercase tracking-wide text-brand-text-primary flex items-center gap-2 mb-2">
            <FlaskConical className="h-4 w-4 text-brand-gold" />
            {diagnosticsSection.title}
          </h2>
          {diagnosticsSection.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="text-xs sm:text-sm text-brand-text-muted mb-3 font-light">
              {paragraph}
            </p>
          ))}
          <ItemChips items={diagnosticsSection.items} columns={2} />
        </div>
      )}

      {infoSections.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {infoSections.map((section, index) => {
            const Icon = infoIcons[index] ?? Check;
            const isReception =
              section.title.toLowerCase().includes('qabul') ||
              section.title.toLowerCase().includes('приём') ||
              section.title.toLowerCase().includes('appointment');

            return (
              <div key={section.title} className={isReception ? 'md:col-span-2 xl:col-span-1' : ''}>
                <InfoCard
                  title={section.title}
                  icon={Icon}
                  paragraphs={section.paragraphs ?? []}
                  accent={isReception}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function DoctorProfileLayout({
  locale,
  doctor,
  profile,
  d,
  onBackToList,
  onOpenAppointment,
}: {
  locale: Locale;
  doctor: Doctor;
  profile: DoctorProfileContent;
  d: Record<string, string>;
  onBackToList: () => void;
  onOpenAppointment: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-brand-white rounded-2xl sm:rounded-3xl border border-brand-sectiongray shadow-sm overflow-hidden"
    >
      <div className="border-b border-brand-sectiongray bg-gradient-to-br from-brand-offwhite via-brand-white to-brand-offwhite p-5 sm:p-7 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:items-center">
          <div className="shrink-0 mx-auto lg:mx-0 w-[9.5rem] sm:w-40">
            {doctor.photo ? (
              <MediaImage
                src={doctor.photo}
                alt={doctor.name[locale]}
                className="w-full aspect-[3/4] rounded-2xl object-cover object-top shadow-md border border-brand-sectiongray/60"
              />
            ) : (
              <div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-brand-offwhite text-brand-text-muted text-sm">
                {locale === 'uz' ? "Rasm yo'q" : locale === 'ru' ? 'Нет фото' : 'No photo'}
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0 text-center lg:text-left">
            <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase font-mono leading-none block mb-1.5">
              {doctor.role[locale]}
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-text-primary leading-tight">
              {doctor.name[locale]}
            </h1>

            <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold-light/15 px-3 py-1.5 text-[11px] font-semibold text-brand-text-primary">
                <Award className="h-3.5 w-3.5 text-brand-gold" />
                {doctor.experience[locale]}{' '}
                {locale === 'uz' ? 'yillik tajriba' : locale === 'ru' ? 'лет практики' : 'years experience'}
              </span>
              {doctor.education[locale] && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-offwhite px-3 py-1.5 text-[11px] font-semibold text-brand-text-secondary max-w-full">
                  <Briefcase className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                  <span className="truncate">{doctor.education[locale]}</span>
                </span>
              )}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-brand-gold-dark active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                {d.appointmentBtn}
              </button>
              <button
                type="button"
                onClick={onBackToList}
                className="inline-flex items-center justify-center rounded-xl border border-brand-sectiongray bg-white px-5 py-3 text-xs font-semibold text-brand-text-secondary transition-all hover:bg-brand-offwhite active:scale-[0.98] cursor-pointer"
              >
                {d.closeBtn}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-7 lg:p-8">
        <DoctorProfileDetails profile={profile} />
      </div>
    </motion.div>
  );
}

function DoctorSimpleLayout({
  locale,
  doctor,
  d,
  onBackToList,
  onOpenAppointment,
}: {
  locale: Locale;
  doctor: Doctor;
  d: Record<string, string>;
  onBackToList: () => void;
  onOpenAppointment: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-brand-white rounded-2xl sm:rounded-3xl border border-brand-sectiongray shadow-sm overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="w-full md:w-[38%] bg-brand-offwhite shrink-0 border-b md:border-b-0 md:border-r border-brand-sectiongray">
          <div className="flex items-start justify-center p-4 sm:p-6 md:p-8 md:min-h-full">
            {doctor.photo ? (
              <MediaImage
                src={doctor.photo}
                alt={doctor.name[locale]}
                className="w-full h-auto max-h-[min(78vh,720px)] md:max-h-none object-contain object-top"
              />
            ) : (
              <div className="flex items-center justify-center w-full min-h-[280px] text-brand-text-muted text-sm">
                {locale === 'uz' ? "Rasm yo'q" : locale === 'ru' ? 'Нет фото' : 'No photo'}
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-[62%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase font-mono leading-none block mb-1.5">
              {doctor.role[locale]}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary leading-tight">
              {doctor.name[locale]}
            </h1>

            <div className="flex gap-4 mt-3 pb-4 border-b border-brand-offwhite text-xs">
              <span className="text-brand-text-muted flex items-center gap-1 font-semibold">
                <Award className="w-4 h-4 text-brand-gold" />
                {doctor.experience[locale]}{' '}
                {locale === 'uz' ? 'yillik tajriba' : locale === 'ru' ? 'лет практики' : 'years experience'}
              </span>
            </div>

            <div className="mt-5 space-y-5 text-sm">
              {doctor.education[locale] && (
                <div>
                  <h2 className="text-sm font-extrabold text-brand-text-primary uppercase tracking-wide flex items-center gap-1.5 mb-2">
                    <Briefcase className="w-4 h-4 text-brand-gold" />
                    {d.education}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-brand-text-primary leading-relaxed">
                    {doctor.education[locale]}
                  </p>
                </div>
              )}

              <div>
                <h2 className="text-xs font-bold text-brand-text-muted uppercase tracking-widest flex items-center gap-1.5 mb-2">
                  <Check className="w-4 h-4 text-brand-gold" />
                  {locale === 'uz'
                    ? 'Professional shifokor falsafasi'
                    : locale === 'ru'
                      ? 'Философия практики'
                      : 'Expert Focus & Ethics'}
                </h2>
                <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed font-light">
                  {doctor.bio[locale]}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-brand-offwhite flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="flex-1 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl active:scale-98 transition-all cursor-pointer shadow-md text-center inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              {d.appointmentBtn}
            </button>
            <button
              type="button"
              onClick={onBackToList}
              className="px-5 py-3 bg-brand-offwhite hover:bg-brand-sectiongray text-brand-text-secondary font-semibold text-xs rounded-xl active:scale-98 transition-all cursor-pointer text-center"
            >
              {d.closeBtn}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DoctorPage({
  locale,
  doctorId,
  doctors,
  dictionary,
  onBackToList,
  onOpenAppointment,
}: DoctorPageProps) {
  const d = dictionary || DICTIONARY[locale];
  const doctor = doctors.find((doc) => doc.id === doctorId) ?? null;
  const profile = doctor?.profile?.[locale];

  if (!doctor) {
    return (
      <section className="py-16 bg-brand-white min-h-screen">
        <div className="site-container max-w-2xl text-center">
          <h1 className="text-2xl font-extrabold text-brand-text-primary">
            {locale === 'uz' ? 'Shifokor topilmadi' : locale === 'ru' ? 'Врач не найден' : 'Doctor not found'}
          </h1>
          <p className="text-brand-text-muted mt-3 text-sm">
            {locale === 'uz'
              ? "Ushbu shifokor profili mavjud emas yoki o'chirilgan."
              : locale === 'ru'
                ? 'Профиль врача не существует или был удалён.'
                : 'This doctor profile does not exist or has been removed.'}
          </p>
          <button
            type="button"
            onClick={onBackToList}
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            <CornerUpLeft className="w-4 h-4" />
            {locale === 'uz' ? "Shifokorlar ro'yxatiga qaytish" : locale === 'ru' ? 'К списку врачей' : 'Back to doctors'}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 bg-brand-white min-h-screen">
      <div className="site-container max-w-5xl">
        <Link
          to={doctorsListPath(locale)}
          onClick={(event) => {
            event.preventDefault();
            onBackToList();
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-brand-gold-dark mb-5 transition-colors"
        >
          <CornerUpLeft className="w-4 h-4" />
          {locale === 'uz' ? "Barcha shifokorlar" : locale === 'ru' ? 'Все врачи' : 'All doctors'}
        </Link>

        {profile ? (
          <DoctorProfileLayout
            locale={locale}
            doctor={doctor}
            profile={profile}
            d={d}
            onBackToList={onBackToList}
            onOpenAppointment={onOpenAppointment}
          />
        ) : (
          <DoctorSimpleLayout
            locale={locale}
            doctor={doctor}
            d={d}
            onBackToList={onBackToList}
            onOpenAppointment={onOpenAppointment}
          />
        )}
      </div>
    </section>
  );
}
