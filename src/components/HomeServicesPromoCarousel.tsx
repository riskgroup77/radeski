import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type TransitionEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Footprints,
  Leaf,
  Microscope,
  Play,
  Scan,
  Sparkles,
  Star,
  Stethoscope,
  Sun,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { Locale } from '../types';
import { CLINIC_EXPERIENCE_YEARS } from '../data';
import { formatPriceValue } from '../api/mappers';
import {
  buildHomePromoSlides,
  getPromoCarouselLabels,
  getPromoText,
  type HomePromoSlide,
} from '../data/homePromoCarousel';
import { promoServicePath, type PageId } from '../routing/paths';
import AppointmentBookingLink from './AppointmentBookingLink';

const AUTO_PLAY_MS = 5000;
const VISIBLE_CARD_COUNT = 3;
const CARD_GAP_PX = 12;

interface HomeServicesPromoCarouselProps {
  locale: Locale;
  appointmentLabel: string;
  clientCount?: number;
  doctorsCount?: number;
  onNavigate?: (page: PageId) => void;
}

const SLIDE_ICONS: Record<string, LucideIcon> = {
  'promo-dermataskopiya': Microscope,
  'promo-ipl': Sun,
  'promo-podologiya': Footprints,
  'promo-karbon-peeling': Sparkles,
  'promo-co2-lazer': Zap,
  'promo-qosh-tatu': Scan,
  'promo-lazer-epilyatsiya': Sparkles,
  'promo-soch-mezoterapiya': Leaf,
  'promo-fototerapiya': Sun,
  'promo-soch-ekish': Stethoscope,
};

function getHeroCopy(locale: Locale) {
  if (locale === 'uz') {
    return {
      badge: 'Teri va estetika klinikasi',
      titleLead: 'Radeski Skin Clinic',
      titleAccent: '— kosmetologiya, IPL, lazer',
      description:
        'IPL, lazer epilyatsiya, dermatoskopiya, fototerapiya, botoks va Mohs — zamonaviy teri va estetika xizmatlari.',
      viewServices: "Xizmatlarni ko'rish",
      statPatients: 'Baxtli bemorlar',
      statDoctors: 'Mutaxassis shifokorlar',
      statExperience: 'Tajriba',
      yearsSuffix: 'yil',
    };
  }
  if (locale === 'ru') {
    return {
      badge: 'Клиника кожи и эстетики',
      titleLead: 'Radeski Skin Clinic',
      titleAccent: '— косметология, IPL, лазер',
      description:
        'IPL, лазерная эпиляция, дерматоскопия, фототерапия, ботокс и Mohs — современные услуги для кожи и эстетики.',
      viewServices: 'Посмотреть услуги',
      statPatients: 'Довольных пациентов',
      statDoctors: 'Специалистов',
      statExperience: 'Опыт',
      yearsSuffix: 'лет',
    };
  }
  return {
    badge: 'Skin & aesthetic clinic',
    titleLead: 'Radeski Skin Clinic',
    titleAccent: '— cosmetology, IPL, laser',
    description:
      'IPL, laser hair removal, dermatoscopy, phototherapy, Botox and Mohs — modern skin and aesthetic care.',
    viewServices: 'View services',
    statPatients: 'Happy patients',
    statDoctors: 'Specialist doctors',
    statExperience: 'Experience',
    yearsSuffix: 'years',
  };
}

const VerticalServiceCarousel = memo(function VerticalServiceCarousel({
  slides,
  locale,
  labels,
  paused,
}: {
  slides: HomePromoSlide[];
  locale: Locale;
  labels: ReturnType<typeof getPromoCarouselLabels>;
  paused: boolean;
}) {
  const [headIndex, setHeadIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [cardStepPx, setCardStepPx] = useState(168);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const measureRef = useRef<HTMLDivElement>(null);
  const finishingRef = useRef(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  const slideCount = slides.length;
  const canRotate = slideCount > 1;

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const update = () => setCardStepPx(el.offsetHeight + CARD_GAP_PX);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [locale, slideCount]);

  const finishStep = useCallback(() => {
    if (finishingRef.current) return;
    finishingRef.current = true;

    setTransitionEnabled(false);
    setHeadIndex((prev) => (prev + 1) % slideCount);
    setStep(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
        finishingRef.current = false;
      });
    });
  }, [slideCount]);

  const advance = useCallback(() => {
    if (!canRotate || step !== 0) return;
    setStep(1);
  }, [canRotate, step]);

  useEffect(() => {
    if (step !== 1) return;

    const timer = window.setTimeout(finishStep, 520);
    return () => window.clearTimeout(timer);
  }, [step, finishStep]);

  useEffect(() => {
    if (!canRotate) return;

    const timer = window.setInterval(() => {
      if (pausedRef.current) return;
      advance();
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [canRotate, advance]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= slideCount) return;
      setTransitionEnabled(false);
      setStep(0);
      setHeadIndex(index);
      requestAnimationFrame(() => setTransitionEnabled(true));
    },
    [slideCount],
  );

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== 'transform' || step !== 1) return;
    finishStep();
  };

  if (slideCount === 0) return null;

  const viewportHeight = cardStepPx * VISIBLE_CARD_COUNT - CARD_GAP_PX;
  const stackPositions = Array.from({ length: Math.min(slideCount, VISIBLE_CARD_COUNT + 1) }, (_, i) => i);

  return (
    <div className="w-full">
      <div
        className="overflow-hidden w-full"
        style={{ height: slideCount < VISIBLE_CARD_COUNT ? undefined : viewportHeight }}
        aria-live="polite"
      >
        <div
          className={`flex flex-col gap-3 ${transitionEnabled && step === 1 ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: slideCount > VISIBLE_CARD_COUNT && step === 1 ? `translateY(-${cardStepPx}px)` : undefined }}
          onTransitionEnd={handleTransitionEnd}
        >
          {stackPositions.map((pos) => {
            const slide = slides[(headIndex + pos) % slideCount];
            return (
              <div key={pos} ref={pos === 0 ? measureRef : undefined} className="shrink-0">
                <ServiceCard slide={slide} locale={locale} labels={labels} />
              </div>
            );
          })}
        </div>
      </div>

      {canRotate && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`${idx + 1}`}
              aria-current={headIndex === idx ? 'true' : undefined}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                headIndex === idx ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-gold/30 hover:bg-brand-gold/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
});

function getSlidePriceDisplay(slide: HomePromoSlide, locale: Locale) {
  if (slide.fixedPriceText) {
    return getPromoText(slide.fixedPriceText, locale);
  }
  if (slide.fallbackPriceValue) {
    const formatted = formatPriceValue(slide.fallbackPriceValue);
    if (locale === 'uz') return `${formatted} so'm`;
    if (locale === 'ru') return `${formatted} сум`;
    return `${formatted} UZS`;
  }
  return '';
}

function formatStatCount(count: number): string {
  if (count >= 1000) {
    const thousands = Math.floor(count / 1000);
    return `${thousands.toLocaleString('ru-RU')} 000+`;
  }
  return `${count}+`;
}

const ServiceCard = memo(function ServiceCard({
  slide,
  locale,
  labels,
  compact,
}: {
  slide: HomePromoSlide;
  locale: Locale;
  labels: ReturnType<typeof getPromoCarouselLabels>;
  compact?: boolean;
}) {
  const Icon = SLIDE_ICONS[slide.id] ?? Sparkles;
  const title = getPromoText(slide.title, locale);
  const description = getPromoText(slide.description, locale);
  const price = getSlidePriceDisplay(slide, locale);
  const detailPath = promoServicePath(locale, slide.slug);

  return (
    <Link
      to={detailPath}
      className={`group flex flex-col bg-white rounded-2xl border border-white/80 shadow-[0_8px_32px_rgba(7,27,46,0.08)] hover:shadow-[0_12px_40px_rgba(192,153,73,0.18)] hover:border-brand-gold/30 transition-all duration-300 no-underline ${
        compact ? 'p-4 gap-2.5 min-h-[156px]' : 'p-5 gap-3 min-h-[168px]'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className={`font-bold text-brand-text-primary leading-snug line-clamp-1 ${
              compact ? 'text-sm' : 'text-base'
            }`}
          >
            {title}
          </h3>
          <p className={`mt-1 text-brand-text-muted leading-relaxed line-clamp-2 ${compact ? 'text-xs' : 'text-sm'}`}>
            {description}
          </p>
        </div>
      </div>

      <p
        className={`font-extrabold text-brand-gold tabular-nums ${compact ? 'text-sm' : 'text-base'} ${
          price ? '' : 'opacity-0'
        }`}
        aria-hidden={!price}
      >
        {price || '—'}
      </p>

      <span
        className={`mt-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand-gold/40 text-brand-gold font-semibold group-hover:bg-brand-gold group-hover:text-white transition-colors ${
          compact ? 'py-2 text-xs' : 'py-2.5 text-sm'
        }`}
      >
        {labels.details}
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
});

export default function HomeServicesPromoCarousel({
  locale,
  appointmentLabel,
  clientCount = 12000,
  doctorsCount = 20,
  onNavigate,
}: HomeServicesPromoCarouselProps) {
  const labels = useMemo(() => getPromoCarouselLabels(locale), [locale]);
  const copy = useMemo(() => getHeroCopy(locale), [locale]);
  const slides = useMemo(() => buildHomePromoSlides(), []);

  const [paused, setPaused] = useState(false);

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden min-h-[640px] lg:min-h-[720px]"
      aria-label={labels.aria}
    >
      <img
        src="/hero-dermatology-bg.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
      />

      <div className="site-container relative z-10 pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 lg:gap-10 xl:gap-14 lg:items-stretch">
          <div className="relative flex flex-col max-w-xl lg:max-w-2xl lg:h-full">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-3 -right-2 sm:-left-5 sm:-right-4 lg:-left-10 lg:-right-6 -top-1 bottom-0 rounded-3xl bg-[linear-gradient(118deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.9)_38%,rgba(255,255,255,0.62)_68%,rgba(255,255,255,0)_100%)]"
            />
            <div className="relative z-10 flex flex-col lg:h-full px-3 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-4">
            <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5">
              <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold shrink-0" />
              {copy.badge}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-extrabold text-brand-text-primary leading-[1.12] tracking-tight">
              {copy.titleLead}{' '}
              <span className="text-brand-gold font-bold not-italic">{copy.titleAccent}</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-brand-text-secondary text-sm sm:text-base leading-relaxed font-light max-w-lg">
              {copy.description}
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
              <AppointmentBookingLink className="flex-1 px-6 py-3.5 rounded-xl bg-white hover:bg-white/90 text-brand-text-primary font-bold text-sm not-italic transition-colors flex items-center justify-center gap-2 no-underline shadow-lg shadow-black/10 border border-white/80">
                <Calendar className="w-4 h-4 shrink-0" />
                {appointmentLabel}
              </AppointmentBookingLink>
              <button
                type="button"
                onClick={() => onNavigate?.('services')}
                className="flex-1 px-6 py-3.5 rounded-xl bg-white hover:bg-white/90 text-brand-text-primary font-bold text-sm not-italic border border-white/80 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-black/10"
              >
                <span className="w-7 h-7 rounded-full border border-brand-gold/40 flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 text-brand-gold fill-brand-gold ml-0.5" />
                </span>
                {copy.viewServices}
              </button>
            </div>
            </div>

            <div className="mt-6 sm:mt-7 lg:mt-auto max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 bg-white rounded-2xl border border-white/80 shadow-[0_8px_40px_rgba(7,27,46,0.07)] divide-y sm:divide-y-0 sm:divide-x divide-brand-sectiongray/80 overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tabular-nums leading-none">
                      {formatStatCount(clientCount)}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-brand-text-muted font-medium">{copy.statPatients}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-5 py-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tabular-nums leading-none">
                      {formatStatCount(doctorsCount)}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-brand-text-muted font-medium">{copy.statDoctors}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-5 py-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-brand-gold fill-brand-gold/20" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tabular-nums leading-none">
                      {CLINIC_EXPERIENCE_YEARS}+ {copy.yearsSuffix}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-brand-text-muted font-medium">{copy.statExperience}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div
            className="flex flex-col justify-end w-full lg:max-w-[420px] lg:ml-auto lg:h-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false);
              }
            }}
          >
            <VerticalServiceCarousel slides={slides} locale={locale} labels={labels} paused={paused} />
          </div>
        </div>
      </div>
    </section>
  );
}
