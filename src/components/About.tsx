import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Sparkles, Building, Play, Users, Eye, ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import { Locale, Doctor } from '../types';
import { DICTIONARY, CLINIC_RATINGS, GALLERY_IMAGS, DOCTORS } from '../data';
import CredentialsGrid from './CredentialsGrid';

interface AboutProps {
  locale: Locale;
  onOpenAppointment: () => void;
  doctors?: Doctor[];
  dictionary?: any;
}

export default function About({ locale, onOpenAppointment, doctors, dictionary }: AboutProps) {
  const d = dictionary || DICTIONARY[locale];
  const dynamicDoctors = doctors || DOCTORS;
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number | null>(null);
  const [activeCredsDocId, setActiveCredsDocId] = useState<string>(dynamicDoctors[0]?.id || "ashurov-dilshod");

  // Dynamic Unsplash links corresponding each gallery item
  const galleryImageUrls = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800", // reception
    "https://images.unsplash.com/photo-1512678080530-7760dfb14aba?auto=format&fit=crop&q=80&w=800", // consulting
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800", // photofinder
    "https://images.unsplash.com/photo-1622902098748-028726098130?auto=format&fit=crop&q=80&w=800", // laser
    "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800", // treatment
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"  // sterilization
  ];

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

          {/* Right illustration / clinic visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[400px] border border-slate-150 shadow-lg group"
          >
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
              alt="Radeski Skin Clinic Inside"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            {/* Play overlay button style simulation for prestige */}
            <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center">
              <div className="w-14 h-14 bg-[#FFFFFF]/95 text-brand-gold rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all">
                <Play className="w-5 h-5 ml-1 animate-pulse" />
              </div>
            </div>
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
                        <img src={doc.photo} alt={doc.name[locale]} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
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
                const doc = dynamicDoctors.find(d => d.id === activeCredsDocId) || dynamicDoctors[0];
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
                    <CredentialsGrid doctorId={doc.id} locale={locale} />
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
              <div
                key={img.name}
                onClick={() => setActiveGalleryIdx(idx)}
                className="group relative h-48 rounded-2xl overflow-hidden shadow-xs hover:shadow-md cursor-pointer border border-brand-sectiongray active:scale-99 transition-all"
              >
                <img
                  src={galleryImageUrls[idx]}
                  alt={img.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/35 group-hover:bg-slate-950/20 transition-colors" />

                {/* Info panel */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#FFFFFF]/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold text-brand-text-primary shadow">
                  <span>{img.icon}</span>
                  <span>{img.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-brand-gold transition-colors" />
                </div>
              </div>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a121e]/90 backdrop-blur-xs">
            <button
              onClick={() => setActiveGalleryIdx(null)}
              className="absolute top-4 right-4 text-white hover:text-slate-300 p-2 hover:bg-white/10 rounded-full transition-all"
            >
              <Eye className="w-5 h-5" /> {locale === 'uz' ? "Yopish" : locale === 'ru' ? "Закрыть" : "Close"}
            </button>

            <div className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                src={galleryImageUrls[activeGalleryIdx]}
                alt={GALLERY_IMAGS[activeGalleryIdx].label}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              {/* Prev / Next hooks */}
              <button
                onClick={() => setActiveGalleryIdx((prev) => prev !== null ? (prev - 1 + galleryImageUrls.length) % galleryImageUrls.length : null)}
                className="absolute left-2 sm:left-4 font-bold text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all text-sm"
              >
                ◀
              </button>
              <button
                onClick={() => setActiveGalleryIdx((prev) => prev !== null ? (prev + 1) % galleryImageUrls.length : null)}
                className="absolute right-2 sm:right-4 font-bold text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all text-sm"
              >
                ▶
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
