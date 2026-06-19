import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, Briefcase, Calendar, Check, CornerUpLeft } from 'lucide-react';
import { Locale, Doctor } from '../types';
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
    <section className="py-10 sm:py-16 bg-brand-white min-h-screen">
      <div className="site-container">
        <Link
          to={doctorsListPath(locale)}
          onClick={(event) => {
            event.preventDefault();
            onBackToList();
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-brand-gold-dark mb-6 transition-colors"
        >
          <CornerUpLeft className="w-4 h-4" />
          {locale === 'uz' ? "Barcha shifokorlar" : locale === 'ru' ? 'Все врачи' : 'All doctors'}
        </Link>

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
      </div>
    </section>
  );
}
