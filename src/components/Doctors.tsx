import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Clock, Calendar, Check, X, Shield } from 'lucide-react';
import { Locale, Doctor } from '../types';
import { DICTIONARY, DOCTORS } from '../data';
import TrustIndicators from './TrustIndicators';
import CredentialsGrid from './CredentialsGrid';

interface DoctorsProps {
  locale: Locale;
  onOpenAppointment: () => void;
  doctors?: Doctor[];
  dictionary?: any;
}

export default function Doctors({ locale, onOpenAppointment, doctors, dictionary }: DoctorsProps) {
  const d = dictionary || DICTIONARY[locale];
  const dynamicDoctors = doctors || DOCTORS;
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  const activeDoctor = dynamicDoctors.find(doc => doc.id === selectedDoctorId);

  return (
    <section id="doctors-page" className="py-16 bg-brand-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title & Desc */}
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

        {/* Doctors list Grid */}
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
                {/* Image Wrap */}
                <div className="relative h-72 w-full overflow-hidden bg-brand-offwhite">
                  <img
                    src={doc.photo}
                    alt={doc.name[locale]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent " />

                  {/* Absolute Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/90 backdrop-blur-xs text-white text-xs font-semibold shadow-md">
                      <Clock className="w-3.5 h-3.5" />
                      {doc.experience[locale]} {d.years} {locale === 'uz' ? "tajriba" : locale === 'ru' ? "лет практики" : "years"}
                    </span>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6">
                  <span className="text-[11px] font-bold text-brand-gold tracking-widest uppercase font-mono block mb-1 leading-none">
                    {doc.role[locale]}
                  </span>
                  <h3 className="text-lg font-extrabold text-brand-text-primary leading-snug group-hover:text-brand-gold transition-colors">
                    {doc.name[locale]}
                  </h3>
                  <p className="text-brand-text-muted text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed font-light">
                    {doc.bio[locale]}
                  </p>
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="p-6 pt-0 border-t border-brand-sectiongray mt-4 flex gap-3">
                <button
                  id={`view-profile-btn-${doc.id}`}
                  onClick={() => setSelectedDoctorId(doc.id)}
                  className="flex-1 py-2.5 bg-brand-dark-navy hover:bg-brand-deep-blue text-white font-semibold text-xs rounded-xl active:scale-98 transition-all cursor-pointer text-center"
                >
                  {d.viewProfile}
                </button>
                <button
                  onClick={onOpenAppointment}
                  className="px-3.5 py-2.5 bg-brand-gold-light/10 hover:bg-brand-gold-light/20 text-brand-gold rounded-xl active:scale-98 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience banner on bottom */}
        <div className="mt-20 bg-gradient-to-r from-brand-dark-navy to-brand-deep-blue rounded-2xl p-8 sm:p-10 border border-brand-dark-navy/20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/15 rounded-full blur-2xl" />
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-light tracking-wider uppercase mb-2">
                <Shield className="w-4 h-4" />
                {locale === 'uz' ? "Kafolatangan Davolash Standartlari" : locale === 'ru' ? "Стандарты Медицинской Безопасности" : "Clinical Excellence Assured"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {locale === 'uz' ? "Kasallikka qarshi kurashishda yuzaki emas, balki chuqur o'rganilgan tashxis qo'yamiz" : 
                 locale === 'ru' ? "Исследуем этиологию болезни, а не просто маскируем внешние симптомы" : 
                                   "We focus on core cell-level diagnostics instead of masking superficial symptoms"}
              </h3>
            </div>
            <button
              onClick={onOpenAppointment}
              className="px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl transition-all cursor-pointer shrink-0"
            >
              {locale === 'uz' ? "Bosh shifokor qabuliga yozilish" : locale === 'ru' ? "Запись к главному врачу" : "Consult our CMO Doctor"}
            </button>
          </div>
        </div>
      </div>

      {/* Doctor profile detailed modal */}
      <AnimatePresence>
        {activeDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctorId(null)}
              className="fixed inset-0 bg-[#0c1424]/75 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-white rounded-2xl shadow-2xl z-10 overflow-hidden border border-brand-sectiongray my-8 max-h-[95vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDoctorId(null)}
                className="absolute top-4 right-4 text-brand-text-muted hover:text-brand-text-primary p-2 hover:bg-brand-offwhite rounded-full transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row h-full overflow-y-auto">
                {/* Left Portrait Column */}
                <div className="w-full md:w-2/5 h-64 md:h-auto md:min-h-[400px] relative bg-brand-offwhite shrink-0">
                  <img
                    src={activeDoctor.photo}
                    alt={activeDoctor.name[locale]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/40 to-transparent" />
                </div>

                {/* Right Portfolio Details Column */}
                <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase font-mono leading-none block mb-1">
                      {activeDoctor.role[locale]}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary leading-tight">
                      {activeDoctor.name[locale]}
                    </h3>

                    {/* Meta quick chips */}
                    <div className="flex gap-4 mt-3 pb-4 border-b border-brand-offwhite text-xs">
                      <span className="text-brand-text-muted flex items-center gap-1">
                        <Award className="w-4 h-4 text-brand-gold" />
                        {activeDoctor.experience[locale]} {locale === 'uz' ? "yillik tajriba" : locale === 'ru' ? "лет практики" : "years experience"}
                      </span>
                    </div>

                    <div className="mt-5 space-y-4 text-sm">
                      <div>
                        <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-widest flex items-center gap-1.5 mb-1 font-sans">
                          <GraduationCap className="w-4 h-4 text-brand-text-muted" />
                          {d.education}
                        </h4>
                        <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed font-light">
                          {activeDoctor.education[locale]}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-widest flex items-center gap-1.5 mb-1 font-sans">
                          <Check className="w-4 h-4 text-brand-gold" />
                          {locale === 'uz' ? "Professional shifokor falsafasi" : locale === 'ru' ? "Философия практики" : "Expert Focus & Ethics"}
                        </h4>
                        <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed font-light">
                          {activeDoctor.bio[locale]}
                        </p>
                      </div>
                    </div>

                    {/* Credentials Grid (License, Active Practice, Certificates, Published Papers) */}
                    <CredentialsGrid doctorId={activeDoctor.id} locale={locale} credentials={activeDoctor.credentials} />

                    {/* Highly Professional E-E-A-T Trust Indicators */}
                    <TrustIndicators doctorId={activeDoctor.id} locale={locale} />
                  </div>

                  <div className="mt-8 pt-4 border-t border-brand-offwhite flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedDoctorId(null);
                        onOpenAppointment();
                      }}
                      className="flex-1 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl active:scale-98 transition-all cursor-pointer shadow-md text-center"
                    >
                      {d.appointmentBtn}
                    </button>
                    <button
                      onClick={() => setSelectedDoctorId(null)}
                      className="px-5 py-3 bg-brand-offwhite hover:bg-brand-sectiongray text-brand-text-secondary font-semibold text-xs rounded-xl active:scale-98 transition-all cursor-pointer text-center"
                    >
                      {d.closeBtn}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
