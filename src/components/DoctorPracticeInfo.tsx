import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Quote, Star, Wallet } from 'lucide-react';
import type { Doctor, Locale, PriceItem } from '../types';
import type { CustomerReview } from '../data/sitePagesContent';
import { localCommercialPath } from '../data/localCommercialSeoCatalog';
import { resolveDoctorPageDetails } from '../utils/doctorPageDetails';
import { reviewsForDoctor } from '../utils/localProof';
import { formatUzs } from '../utils/localLandingDetails';
import AppointmentBookingLink from './AppointmentBookingLink';

interface DoctorPracticeInfoProps {
  locale: Locale;
  doctor: Doctor;
  prices: PriceItem[];
  reviews: CustomerReview[];
  appointmentLabel: string;
}

const COPY = {
  uz: { where: 'Qabul joyi va vaqti', price: 'Birinchi qabul', problems: 'Qaysi muammolar bilan murojaat qilish mumkin', reviews: 'Bemorlar fikri', faq: 'Tez-tez so‘raladigan savollar' },
  ru: { where: 'Где и когда принимает', price: 'Первичный приём', problems: 'С какими проблемами обращаться', reviews: 'Отзывы пациентов', faq: 'Частые вопросы' },
  en: { where: 'Where and when', price: 'First visit', problems: 'Problems to come with', reviews: 'Patient reviews', faq: 'FAQ' },
} as const;

/** Practical part of a doctor page: branch + hours, price, problems (city pages), reviews, FAQ. */
export default function DoctorPracticeInfo({ locale, doctor, prices, reviews, appointmentLabel }: DoctorPracticeInfoProps) {
  const copy = COPY[locale];
  const details = useMemo(() => resolveDoctorPageDetails(doctor, prices, locale), [doctor, prices, locale]);
  const doctorReviews = useMemo(() => reviewsForDoctor(doctor, reviews), [doctor, reviews]);

  return (
    <div className="mt-8 grid gap-6">
      {(details.branches.length > 0 || details.price) && (
        <div className="grid gap-3 sm:grid-cols-2">
          {details.branches.map((branch) => (
            <div key={branch.id} className="p-4 rounded-2xl border border-brand-sectiongray bg-brand-white text-sm text-brand-text-secondary space-y-1.5">
              <h2 className="text-base font-extrabold text-brand-text-primary">{copy.where}</h2>
              <p className="font-semibold text-brand-text-primary">{branch.name[locale]}</p>
              <p className="flex gap-2"><MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />{branch.address[locale]}</p>
              <p className="flex gap-2"><Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />{branch.hours[locale]}</p>
              <p className="flex gap-2"><Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />{branch.phone}</p>
            </div>
          ))}
          {details.price ? (
            <div className="p-4 rounded-2xl border border-brand-sectiongray bg-brand-white text-sm text-brand-text-secondary flex flex-col gap-2">
              <h2 className="text-base font-extrabold text-brand-text-primary flex items-center gap-2">
                <Wallet className="w-4 h-4 text-brand-gold" />
                {copy.price}
              </h2>
              <p className="text-2xl font-extrabold text-brand-text-primary">{formatUzs(details.price, locale)}</p>
              <AppointmentBookingLink className="mt-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white text-sm font-bold no-underline">
                {appointmentLabel}
              </AppointmentBookingLink>
            </div>
          ) : null}
        </div>
      )}

      {details.landingLinks.length > 0 && (
        <div>
          <h2 className="text-lg font-extrabold text-brand-text-primary">{copy.problems}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {details.landingLinks.map((link) => (
              <Link
                key={`${link.city}-${link.slug}`}
                to={localCommercialPath(locale, link.city, link.slug)}
                className="px-3.5 py-2 bg-brand-white border border-brand-sectiongray rounded-xl text-sm font-semibold text-brand-text-primary no-underline hover:border-brand-gold/40"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {doctorReviews.length > 0 && (
        <div>
          <h2 className="text-lg font-extrabold text-brand-text-primary">{copy.reviews}</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {doctorReviews.map((review) => (
              <figure key={review.id} className="p-4 bg-brand-white rounded-2xl border border-brand-sectiongray">
                <div className="flex items-center gap-0.5 text-brand-gold" role="img" aria-label={`${review.rating} / 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-current' : 'opacity-30'}`} />
                  ))}
                </div>
                <blockquote className="mt-2 text-sm text-brand-text-secondary leading-relaxed">
                  <Quote className="inline w-3.5 h-3.5 text-brand-gold/60 mr-1 -mt-1" aria-hidden />
                  {review.comment[locale] || review.comment.uz}
                </blockquote>
                <figcaption className="mt-2 text-xs font-bold text-brand-text-primary">{review.authorName}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {details.faqs.length > 0 && (
        <div>
          <h2 className="text-lg font-extrabold text-brand-text-primary">{copy.faq}</h2>
          <div className="mt-3 space-y-3">
            {details.faqs.map((faq) => (
              <details key={faq.question} className="p-4 bg-brand-white rounded-xl border border-brand-sectiongray group">
                <summary className="font-semibold text-sm text-brand-text-primary cursor-pointer list-none flex justify-between gap-2">
                  {faq.question}
                  <span className="text-brand-gold group-open:rotate-90 transition-transform">›</span>
                </summary>
                <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
