import { ExternalLink, MapPin } from 'lucide-react';
import type { Locale } from '../types';
import { CLINIC_PUBLIC_REVIEW_LINKS } from '../config/links';

const COPY: Record<Locale, { text: string; google: string; yandex: string }> = {
  uz: {
    text: "Fikringizni Google yoki Yandex xaritada ham qoldirsangiz, boshqa bemorlar klinikani osonroq topadi.",
    google: "Google'da baholash",
    yandex: 'Yandex Kartada baholash',
  },
  ru: {
    text: 'Оставьте отзыв и на Google или Яндекс Картах — так другим пациентам проще найти клинику.',
    google: 'Отзыв в Google',
    yandex: 'Отзыв на Яндекс Картах',
  },
  en: {
    text: 'You can also share your experience on Google or Yandex Maps — it helps other patients find us.',
    google: 'Review on Google',
    yandex: 'Review on Yandex Maps',
  },
};

/**
 * Invitation to post a public review on Google / Yandex Maps. Shown to everyone after a review
 * is submitted (never only to happy patients — Google forbids rating-based review gating).
 */
export default function PublicReviewLinks({ locale, className = '' }: { locale: Locale; className?: string }) {
  const copy = COPY[locale];
  const buttonClass =
    'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-brand-sectiongray bg-brand-white text-sm font-semibold text-brand-text-primary hover:border-brand-gold/40 hover:text-brand-gold-dark transition-colors';

  return (
    <div className={`text-center ${className}`}>
      <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed max-w-sm mx-auto">{copy.text}</p>
      <div className="mt-3 flex flex-col min-[400px]:flex-row justify-center gap-2">
        <a href={CLINIC_PUBLIC_REVIEW_LINKS.google} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          <MapPin className="w-4 h-4 text-brand-gold" aria-hidden="true" />
          {copy.google}
          <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
        </a>
        <a href={CLINIC_PUBLIC_REVIEW_LINKS.yandex} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          <MapPin className="w-4 h-4 text-brand-gold" aria-hidden="true" />
          {copy.yandex}
          <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
