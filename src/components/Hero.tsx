import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, ShieldAlert, Award } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY } from '../data';

interface HeroProps {
  locale: Locale;
  onOpenAppointment: () => void;
  onSelectTab: (tab: string) => void;
}

export default function Hero({ locale, onOpenAppointment, onSelectTab }: HeroProps) {
  const d = DICTIONARY[locale];
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: {
        uz: "Radeski Skin & Aesthetic Clinic",
        ru: "Клиника дерматологии и эстетики Radeski",
        en: "Radeski Dermatology & Aesthetic Clinic"
      },
      subtitle: {
        uz: "Farg'onada mukammal teri parvarishi va klinik davolash",
        ru: "Профессиональное лечение кожи и уход за вашей красотой в Фергане",
        en: "Advanced clinical therapeutics and aesthetic dermatology in Fergana"
      },
      badge: {
        uz: "18 yillik tibbiy amaliyot",
        ru: "18 лет медицинской практики",
        en: "18 Years of Medical Practice"
      },
      badgeIcon: Award,
      imageBg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
    },
    {
      title: {
        uz: "BBL Forever Young™ original foto-terapiyasi",
        ru: "Легендарное BBL Forever Young™ омоложение",
        en: "Original Sciton BBL Forever Young™"
      },
      subtitle: {
        uz: "O'zbekistonda yoshlik genlarini faollashtiruvchi yagona yechim",
        ru: "Инновационная американская система омоложения кожи на генном уровне в Водине",
        en: "Exclusive gene-level skin renewal treatment on genuine Sciton system"
      },
      badge: {
        uz: "Eng so'nggi texnologiya",
        ru: "Передовые технологии США",
        en: "Certified USA Gold Standard"
      },
      badgeIcon: Sparkles,
      imageBg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
    },
    {
      title: {
        uz: "PhotoFinder orqali xavfsiz nevos va xollar skanasi",
        ru: "Ранняя диагностика образований кожи на PhotoFinder",
        en: "Computerized Mole Mapping on PhotoFinder"
      },
      subtitle: {
        uz: "Sun'iy intellekt yordamida tana xaritalash, melanomalar erta skriningi",
        ru: "Цифровой немецкий дерматоскоп выявляет малейшие изменения родинок",
        en: "German absolute precision scanning mapping every spot and mole for safety"
      },
      badge: {
        uz: "Dermato-onkologiya xavfsizligi",
        ru: "Онкологическая безопасность",
        en: "Oncological Prevention & Screening"
      },
      badgeIcon: ShieldAlert,
      imageBg: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];
  const Icon = slide.badgeIcon;

  return (
    <div id="hero-section" className="relative h-[580px] sm:h-[650px] bg-brand-dark-navy overflow-hidden pt-12">
      {/* Background Slideshow with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0.3, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.imageBg})` }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/90 via-brand-dark-navy/65 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        {/* Dynamic Badge */}
        <motion.div
          key={`badge-${activeSlide}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold-light/30 text-brand-gold-light text-xs font-semibold w-fit mb-6"
        >
          <Icon className="w-4 h-4" />
          <span>{slide.badge[locale]}</span>
        </motion.div>

        {/* Dynamic Title */}
        <motion.h2
          key={`title-${activeSlide}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl leading-tight"
        >
          {slide.title[locale]}
        </motion.h2>

        {/* Dynamic Subtitle */}
        <motion.p
          key={`sub-${activeSlide}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          className="text-slate-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl leading-relaxed font-light"
        >
          {slide.subtitle[locale]}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <button
            onClick={onOpenAppointment}
            className="px-8 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-bold tracking-wide shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            {d.appointmentBtn}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSelectTab('services')}
            className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold tracking-wide border border-white/20 backdrop-blur-sm active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            {locale === 'uz' ? "Xizmatlarimiz" : locale === 'ru' ? "Наши услуги" : "Explore Services"}
          </button>
        </motion.div>

        {/* Dots indicators */}
        <div className="absolute bottom-8 left-4 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-10 h-1.5 rounded-full transition-all duration-300 ${
                activeSlide === idx ? 'bg-brand-gold animate-pulse' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
