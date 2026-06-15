import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Sparkles, Building, Users, X, ChevronLeft, ChevronRight, Award, GraduationCap } from 'lucide-react';
import { Locale, Doctor } from '../types';
import { DICTIONARY, CLINIC_RATINGS, GALLERY_IMAGS } from '../data';
import CredentialsGrid from './CredentialsGrid';

interface AboutProps {
  locale: Locale;
  onOpenAppointment: () => void;
  doctors?: Doctor[];
  dictionary?: any;
}

export default function About({ locale, onOpenAppointment, doctors, dictionary }: AboutProps) {
  const d = dictionary || DICTIONARY[locale];
  const dynamicDoctors = doctors ?? [];
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number | null>(null);
  const [activeCredsDocId, setActiveCredsDocId] = useState<string>('');

  useEffect(() => {
    if (dynamicDoctors.length === 0) {
      setActiveCredsDocId('');
      return;
    }
    const isCurrentValid = dynamicDoctors.some((doc) => doc.id === activeCredsDocId);
    if (!isCurrentValid) {
      setActiveCredsDocId(dynamicDoctors[0].id);
    }
  }, [dynamicDoctors, activeCredsDocId]);

  useEffect(() => {
    if (activeGalleryIdx === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveGalleryIdx(null);
      } else if (event.key === 'ArrowLeft') {
        setActiveGalleryIdx((prev) =>
          prev !== null ? (prev - 1 + GALLERY_IMAGS.length) % GALLERY_IMAGS.length : null
        );
      } else if (event.key === 'ArrowRight') {
        setActiveGalleryIdx((prev) =>
          prev !== null ? (prev + 1) % GALLERY_IMAGS.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGalleryIdx]);

  const showPrevGalleryImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveGalleryIdx((prev) =>
      prev !== null ? (prev - 1 + GALLERY_IMAGS.length) % GALLERY_IMAGS.length : null
    );
  };

  const showNextGalleryImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveGalleryIdx((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGS.length : null
    );
  };

  return (
    <section id="about-page" className="py-16 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Core content row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
              {d.navAbout}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-4">
              {d.aboutHeader}
            </h2>
            <p className="text-brand-text-secondary mt-6 leading-relaxed text-sm sm:text-base font-light">
              {d.aboutParagraph1}
            </p>
            <p className="text-brand-text-secondary mt-4 leading-relaxed text-sm sm:text-base font-light">
              {d.aboutParagraph2}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-gold block">18+</span>
                <span className="text-xs text-brand-text-muted font-medium">{locale === 'uz' ? "Yillik tajriba" : locale === 'ru' ? "Лет медицинского стажа" : "Years practice"}</span>
              </div>
              <div className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-gold block">50,000+</span>
                <span className="text-xs text-brand-text-muted font-medium">{locale === 'uz' ? "Tuzalgan bemorlar" : locale === 'ru' ? "Счастливых пациентов" : "Healed Patient Cases"}</span>
              </div>
            </div>
          </motion.div>

          {/* Clinic video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[400px] border border-slate-150 shadow-lg bg-black"
          >
            <iframe
              src="https://www.youtube.com/embed/Hb8W-e1HZ_g"
              title={locale === 'uz' ? 'Radeski klinikasi haqida video' : locale === 'ru' ? 'Видео о клинике Radeski' : 'About Radeski Clinic video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>

        {/* Benefits cards bento grid */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-text-primary tracking-tight">
              {locale === 'uz' ? "Bizning asosiy afzalliklarimiz" : locale === 'ru' ? "Наши ключевые преимущества" : "Why Choose Our Clinic?"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-brand-offwhite/50 hover:bg-[#FFFFFF] rounded-2xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold mb-4 border border-brand-gold-light/20">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-brand-text-primary text-base">{d.features01}</h4>
                <p className="text-xs text-brand-text-muted mt-2 leading-relaxed font-light">{d.features01Desc}</p>
              </div>
            </div>

            <div className="p-6 bg-brand-offwhite/50 hover:bg-[#FFFFFF] rounded-2xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold mb-4 border border-brand-gold-light/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-brand-text-primary text-base">{d.features02}</h4>
                <p className="text-xs text-brand-text-muted mt-2 leading-relaxed font-light">{d.features02Desc}</p>
              </div>
            </div>

            <div className="p-6 bg-brand-offwhite/50 hover:bg-[#FFFFFF] rounded-2xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold mb-4 border border-brand-gold-light/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-brand-text-primary text-base">{d.features03}</h4>
                <p className="text-xs text-brand-text-muted mt-2 leading-relaxed font-light">{d.features03Desc}</p>
              </div>
            </div>

            <div className="p-6 bg-brand-offwhite/50 hover:bg-[#FFFFFF] rounded-2xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold mb-4 border border-brand-gold-light/20">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-brand-text-primary text-base">{d.features04}</h4>
                <p className="text-xs text-brand-text-muted mt-2 leading-relaxed font-light">{d.features04Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sterility & Safety module */}
        <div className="bg-brand-sectiongray p-8 sm:p-12 rounded-3xl border border-brand-gold/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
          <div className="md:col-span-8">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-wider block mb-2">{locale === 'uz' ? "Sterilizatsiya va xavfsizlik" : locale === 'ru' ? "Стерилизация и безопасность" : "Sterility Standards"}</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary tracking-tight">
              {d.safetyTitle}
            </h3>
            <p className="text-brand-text-secondary text-sm sm:text-base mt-4 leading-relaxed font-light">
              {d.safetyDesc}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <button
              onClick={onOpenAppointment}
              className="py-3 px-6 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl active:scale-98 transition-all shadow-lg shadow-brand-gold/10 cursor-pointer"
            >
              {locale === 'uz' ? "Sterillik kafolati bilan yozilish" : locale === 'ru' ? "Запись со стандартом стерильности" : "Book safe clinical consult"}
            </button>
          </div>
        </div>

        {/* Credentials Grid section */}
        <div className="mb-20" id="about-credentials-section">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full font-mono">
              {locale === 'uz' ? "Kafolatlangan Akkreditatsiya" : locale === 'ru' ? "Официальная аккредитация" : "Clinical Licensing & Trust State"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-text-primary tracking-tight mt-3">
              {locale === 'uz' ? "Shifokorlarimizning litsenziya va ilmiy ko'rsatkichlari" : 
               locale === 'ru' ? "Лицензии и научные показатели наших врачей" : 
                                 "Official Medical Licenses & Academic Indicators"}
            </h3>
            <p className="text-brand-text-muted text-xs sm:text-sm mt-3 font-light leading-relaxed">
              {locale === 'uz' ? "Tibbiyot markazimizning har bir mutaxassisi rasmiy tibbiy faoliyat ruxsatnomasiga, xalqaro attestatsiyadan o'tgan sertifikatlarga va faol ilmiy-klinik nashrlarga ega." : 
               locale === 'ru' ? "Каждый специалист нашей клиники обладает официальной медицинской лицензией, международными сертификатами обучения и научными статьями." : 
                                 "Every clinician on our medical registry holds a supreme governmental healthcare license, dynamic global qualifications, and peer-reviewed journals."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-brand-white p-4 sm:p-8 rounded-3xl border border-brand-sectiongray shadow-2xs">
            {/* Physicians picker block */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-widest mb-4 font-sans flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-gold" />
                {locale === 'uz' ? "Shifokorlar reestri" : locale === 'ru' ? "Реестр специалистов" : "Registered Physicians"}
              </h4>

              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {dynamicDoctors.map((doc) => {
                  const isActive = activeCredsDocId === doc.id;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setActiveCredsDocId(doc.id)}
                      className={`w-full text-left p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-brand-gold-light/5 border-brand-gold shadow-xs'
                          : 'bg-brand-white border-brand-sectiongray hover:bg-brand-offwhite'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-brand-sectiongray bg-brand-offwhite">
                        {doc.photo ? (
                          <img src={doc.photo} alt={doc.name[locale]} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[8px] text-brand-text-muted">—</div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className={`text-xs font-bold truncate leading-tight ${isActive ? 'text-brand-gold' : 'text-brand-text-primary'}`}>
                          {doc.name[locale]}
                        </h5>
                        <p className="text-[10px] text-brand-text-muted truncate leading-normal mt-0.5 font-light">
                          {doc.role[locale]}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Credentials Card */}
            <div className="lg:col-span-7">
              {(() => {
                const doc = dynamicDoctors.find(d => d.id === activeCredsDocId) ?? dynamicDoctors[0];
                if (!doc) {
                  return (
                    <div className="p-5 bg-brand-offwhite/50 rounded-2xl border border-brand-sectiongray/80 text-sm text-brand-text-muted font-light">
                      {locale === 'uz'
                        ? "Shifokorlar ma'lumoti hozircha mavjud emas."
                        : locale === 'ru'
                          ? 'Информация о врачах пока недоступна.'
                          : 'Physician information is not available yet.'}
                    </div>
                  );
                }
                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 bg-brand-offwhite/50 rounded-2xl border border-brand-sectiongray/80"
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-sectiongray">
                      <div>
                        <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest font-mono">
                          {locale === 'uz' ? "Tanlangan shifokor ma'lumotlari" : locale === 'ru' ? "Выбранный врач" : "Physician Under Review"}
                        </span>
                        <h4 className="text-base font-bold text-brand-text-primary leading-tight mt-0.5">
                          {doc.name[locale]}
                        </h4>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-semibold rounded-full border border-brand-gold/20 shrink-0">
                        <Award className="w-3.5 h-3.5" />
                        <span>{doc.experience[locale]} {locale === 'uz' ? "yil tajriba" : locale === 'ru' ? "лет" : "yrs"}</span>
                      </div>
                    </div>

                    <p className="text-brand-text-secondary text-xs font-light leading-relaxed mb-4">
                      <strong>{locale === 'uz' ? "Tavsif:" : locale === 'ru' ? "Реноме:" : "Focus:"}</strong> {doc.bio[locale]}
                    </p>

                    {/* Dynamic Credentials Grid */}
                    <CredentialsGrid
                      doctorId={doc.id}
                      locale={locale}
                      credentials={doc.credentials}
                      specialty={doc.role[locale]}
                    />
                  </motion.div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-text-primary tracking-tight">
              {locale === 'uz' ? "Fotogalereya" : locale === 'ru' ? "Фотогалерея клиники" : "Clinic photo-tour"}
            </h3>
            <p className="text-brand-text-muted text-xs sm:text-sm mt-2">
              {locale === 'uz' ? "Radeski klinikasining ichki va modern kabinet ko'rinishlari" : locale === 'ru' ? "Посмотрите на условия нашего стационара и передовое аппаратное оснащение" : "Explore our clinical treatment, consulting rooms, and high-tech devices"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {GALLERY_IMAGS.map((img, idx) => (
              <button
                key={img.name}
                type="button"
                onClick={() => setActiveGalleryIdx(idx)}
                className="group relative h-48 rounded-2xl overflow-hidden shadow-xs hover:shadow-md cursor-pointer border border-brand-sectiongray active:scale-99 transition-all"
              >
                <img
                  src={img.src}
                  alt={`Radeski clinic ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Trust Platform Ratings */}
        <div className="mt-20 border-t border-brand-sectiongray pt-10 text-center">
          <p className="text-xs font-bold text-brand-text-muted uppercase tracking-widest">{d.ratingsTitle}</p>
          <div className="flex justify-center gap-6 sm:gap-14 flex-wrap mt-6">
            {CLINIC_RATINGS.map((plat) => (
              <div key={plat.platform} className="flex items-center gap-3">
                <span className="text-xl">{plat.logo}</span>
                <div className="text-left leading-none">
                  <span className="font-extrabold text-brand-text-primary text-sm sm:text-base leading-none block">{plat.rating} / 5.0</span>
                  <span className="text-[10px] text-brand-text-muted uppercase tracking-wider font-light leading-none">{plat.platform} ({plat.count}+ {d.reviewsCount})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeGalleryIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveGalleryIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a121e]/92 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveGalleryIdx(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-slate-300 p-2.5 hover:bg-white/10 rounded-full transition-all z-10"
              aria-label={locale === 'uz' ? 'Yopish' : locale === 'ru' ? 'Закрыть' : 'Close'}
            >
              <X className="w-6 h-6" />
            </button>

            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/80 text-xs font-mono tracking-wider">
              {activeGalleryIdx + 1} / {GALLERY_IMAGS.length}
            </span>

            <div
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={GALLERY_IMAGS[activeGalleryIdx].src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  src={GALLERY_IMAGS[activeGalleryIdx].src}
                  alt={`Radeski clinic ${activeGalleryIdx + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={showPrevGalleryImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                aria-label={locale === 'uz' ? 'Oldingi rasm' : locale === 'ru' ? 'Предыдущее' : 'Previous'}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={showNextGalleryImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                aria-label={locale === 'uz' ? 'Keyingi rasm' : locale === 'ru' ? 'Следующее' : 'Next'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
