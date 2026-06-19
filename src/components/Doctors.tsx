import { motion } from 'motion/react';
import { Clock, Calendar, Shield } from 'lucide-react';
import { Locale, Doctor } from '../types';
import { DICTIONARY, DOCTORS } from '../data';
import MediaImage from './MediaImage';

interface DoctorsProps {
  locale: Locale;
  onOpenAppointment: () => void;
  onOpenDoctor: (doctorId: string) => void;
  doctors?: Doctor[];
  dictionary?: Record<string, string>;
}

function WorkplaceBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="mt-3">
      <span className="text-xs font-extrabold text-brand-text-primary uppercase tracking-wide">
        {label}
      </span>
      <p className="text-sm sm:text-base mt-1 font-semibold text-brand-text-primary leading-relaxed">
        {value}
      </p>
    </div>
  );
}

export default function Doctors({
  locale,
  onOpenAppointment,
  onOpenDoctor,
  doctors,
  dictionary,
}: DoctorsProps) {
  const d = dictionary || DICTIONARY[locale];
  const dynamicDoctors = doctors || DOCTORS;

  return (
    <section id="doctors-page" className="py-16 bg-brand-white min-h-screen">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
            {d.navDoctors}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary mt-3 tracking-tight">
            {d.doctorsTitle}
          </h2>
          <p className="text-brand-text-muted mt-4 text-sm sm:text-base leading-relaxed">
            {d.doctorsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dynamicDoctors.map((doc) => (
            <motion.div
              key={doc.id}
              id={`doctor-card-${doc.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-white rounded-2xl border border-brand-sectiongray overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <button
                  type="button"
                  onClick={() => onOpenDoctor(doc.id)}
                  className="relative aspect-[3/4] w-full overflow-hidden bg-brand-offwhite block cursor-pointer"
                  aria-label={doc.name[locale]}
                >
                  {doc.photo ? (
                    <MediaImage
                      src={doc.photo}
                      alt={doc.name[locale]}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-brand-text-muted text-sm">
                      {locale === 'uz' ? "Rasm yo'q" : locale === 'ru' ? 'Нет фото' : 'No photo'}
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/75 to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/90 backdrop-blur-xs text-white text-xs font-semibold shadow-md">
                      <Clock className="w-3.5 h-3.5" />
                      {doc.experience[locale]} {d.years}{' '}
                      {locale === 'uz' ? 'tajriba' : locale === 'ru' ? 'лет практики' : 'years'}
                    </span>
                  </div>
                </button>

                <div className="p-6">
                  <span className="text-[11px] font-bold text-brand-gold tracking-widest uppercase font-mono block mb-1 leading-none">
                    {doc.role[locale]}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenDoctor(doc.id)}
                    className="text-left w-full text-lg font-extrabold text-brand-text-primary leading-snug group-hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    {doc.name[locale]}
                  </button>
                  {doc.education[locale] && (
                    <WorkplaceBlock label={d.education} value={doc.education[locale]} />
                  )}
                  <p className="text-brand-text-muted text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed font-light">
                    {doc.bio[locale]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-brand-sectiongray mt-4 flex gap-3">
                <button
                  id={`view-profile-btn-${doc.id}`}
                  type="button"
                  onClick={() => onOpenDoctor(doc.id)}
                  className="flex-1 py-2.5 bg-brand-dark-navy hover:bg-brand-deep-blue text-white font-semibold text-xs rounded-xl active:scale-98 transition-all cursor-pointer text-center"
                >
                  {d.viewProfile}
                </button>
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="px-3.5 py-2.5 bg-brand-gold-light/10 hover:bg-brand-gold-light/20 text-brand-gold rounded-xl active:scale-98 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-brand-dark-navy to-brand-deep-blue rounded-2xl p-8 sm:p-10 border border-brand-dark-navy/20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/15 rounded-full blur-2xl" />
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-light tracking-wider uppercase mb-2">
                <Shield className="w-4 h-4" />
                {locale === 'uz'
                  ? 'Kafolatangan Davolash Standartlari'
                  : locale === 'ru'
                    ? 'Стандарты Медицинской Безопасности'
                    : 'Clinical Excellence Assured'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {locale === 'uz'
                  ? "Kasallikka qarshi kurashishda yuzaki emas, balki chuqur o'rganilgan tashxis qo'yamiz"
                  : locale === 'ru'
                    ? 'Исследуем этиологию болезни, а не просто маскируем внешние симптомы'
                    : 'We focus on core cell-level diagnostics instead of masking superficial symptoms'}
              </h3>
            </div>
            <button
              type="button"
              onClick={onOpenAppointment}
              className="px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl transition-all cursor-pointer shrink-0"
            >
              {locale === 'uz'
                ? 'Bosh shifokor qabuliga yozilish'
                : locale === 'ru'
                  ? 'Запись к главному врачу'
                  : 'Consult our CMO Doctor'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
