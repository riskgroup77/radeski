import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldAlert, Award } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY, HERO_SLIDE_IMAGES } from '../data';
import AppointmentBookingLink from './AppointmentBookingLink';
import ClientCountCard from './ClientCountCard';
import { PageId } from '../routing/paths';

interface HeroProps {
  locale: Locale;
  onOpenAppointment: () => void;
  onNavigate: (page: PageId) => void;
}

export default function Hero({ locale, onOpenAppointment, onNavigate }: HeroProps) {
  const d = DICTIONARY[locale];
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: {
        uz: 'Radeski Skin & Aesthetic Clinic',
        ru: 'Клиника дерматологии и эстетики Radeski',
        en: 'Radeski Dermatology & Aesthetic Clinic',
      },
      subtitle: {
        uz: "Farg'onada mukammal teri parvarishi va klinik davolash",
        ru: 'Профессиональное лечение кожи и уход за вашей красотой в Фергане',
        en: 'Advanced clinical therapeutics and aesthetic dermatology in Fergana',
      },
      badge: {
        uz: '18 yillik tibbiy amaliyot',
        ru: '18 лет медицинской практики',
        en: '18 Years of Medical Practice',
      },
      badgeIcon: Award,
      image: HERO_SLIDE_IMAGES[0],
    },
    {
      title: {
        uz: 'Gen darajasida innovatsion foto-yoshartirish',
        ru: 'Инновационное фотоомоложение на генном уровне',
        en: 'Innovative gene-level photo rejuvenation',
      },
      subtitle: {
        uz: "Og'riqsiz va juda tez apparatli foto-davolash (foto-yoshartirish) — bir necha seansda yuz va tanadagi dog'larni samarali olib tashlaydi, in'ektsiya va skalpel'siz!",
        ru: 'Безболезненная и сверхбыстрая аппаратная процедура фотолечения (фотоомоложения), которая эффективно удаляет гиперпигментацию на лице и теле за несколько процедур, без уколов и скальпеля!',
        en: 'A painless, ultra-fast hardware phototherapy procedure that effectively removes hyperpigmentation on the face and body in just a few sessions — without injections or a scalpel!',
      },
      badge: {
        uz: "Yoshni o'zgartirmaymiz — shunchaki sizni yoshroq qilamiz!",
        ru: 'Мы не меняем возраст, мы просто делаем Вас моложе!',
        en: "We don't change your age — we simply make you younger!",
      },
      badgeIcon: Sparkles,
      image: HERO_SLIDE_IMAGES[1],
    },
    {
      title: {
        uz: 'PhotoFinder orqali xavfsiz nevos va xollar skanasi',
        ru: 'Ранняя диагностика образований кожи на PhotoFinder',
        en: 'Computerized Mole Mapping on PhotoFinder',
      },
      subtitle: {
        uz: "Sun'iy intellekt yordamida tana xaritalash, melanomalar erta skriningi",
        ru: 'Цифровой немецкий дерматоскоп выявляет малейшие изменения родинок',
        en: 'German absolute precision scanning mapping every spot and mole for safety',
      },
      badge: {
        uz: 'Dermato-onkologiya xavfsizligi',
        ru: 'Онкологическая безопасность',
        en: 'Oncological Prevention & Screening',
      },
      badgeIcon: ShieldAlert,
      image: HERO_SLIDE_IMAGES[2],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide];
  const Icon = slide.badgeIcon;

  return (
    <div
      id="hero-section"
      className="relative w-full h-[min(72vh,580px)] sm:h-[min(78vh,650px)] min-h-[480px] bg-brand-dark-navy overflow-hidden pt-12"
    >
      {/* Background slideshow — hero konteyneriga to‘liq mos object-cover */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((item, idx) => (
          <img
            key={item.image.src}
            src={item.image.src}
            alt=""
            width={1920}
            height={650}
            decoding="async"
            fetchPriority={idx === 0 ? 'high' : 'low'}
            loading={idx === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectPosition: item.image.objectPosition }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/92 via-brand-dark-navy/70 to-brand-dark-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/50 via-transparent to-transparent" />
      </div>

      <div className="relative site-container h-full flex flex-col justify-center pb-20 sm:pb-16 lg:pb-12">
        <div className="lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center lg:gap-8 xl:gap-12 2xl:gap-16">
          <div className="min-w-0">
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

            <motion.h2
              key={`title-${activeSlide}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl leading-tight drop-shadow-sm"
            >
              {slide.title[locale]}
            </motion.h2>

            <motion.p
              key={`sub-${activeSlide}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
              className="text-slate-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl leading-relaxed font-light drop-shadow-sm"
            >
              {slide.subtitle[locale]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl"
            >
              <AppointmentBookingLink className="px-8 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-bold tracking-wide shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm no-underline">
                {d.appointmentBtn}
                <ArrowRight className="w-4 h-4" />
              </AppointmentBookingLink>
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold tracking-wide border border-white/20 backdrop-blur-sm active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                {locale === 'uz' ? 'Xizmatlarimiz' : locale === 'ru' ? 'Наши услуги' : 'Explore Services'}
              </button>
            </motion.div>
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-0 flex items-center justify-center lg:justify-end lg:self-center overflow-visible">
            <ClientCountCard locale={locale} variant="hero" />
          </div>
        </div>

        <div className="absolute bottom-8 left-4 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeSlide === idx ? 'w-10 bg-brand-gold animate-pulse' : 'w-6 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
