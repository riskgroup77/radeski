import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Star } from 'lucide-react';
import type { Doctor, Locale } from '../types';
import type { CustomerReview, TreatmentResult } from '../data/sitePagesContent';
import { doctorPath, pagePath } from '../routing/paths';
import { doctorRouteKey } from '../utils/doctorSlug';
import MediaImage from './MediaImage';

interface LandingProofSectionsProps {
  locale: Locale;
  doctors: Doctor[];
  results: TreatmentResult[];
  reviews: CustomerReview[];
}

const COPY = {
  uz: { doctors: 'Qabul qiladigan shifokorlar', results: 'Klinik natijalar', reviews: 'Bemorlar fikri', allResults: 'Barcha natijalar', profile: 'Profil' },
  ru: { doctors: 'Врачи, которые ведут приём', results: 'Клинические результаты', reviews: 'Отзывы пациентов', allResults: 'Все результаты', profile: 'Профиль' },
  en: { doctors: 'Doctors who see patients', results: 'Clinical results', reviews: 'Patient reviews', allResults: 'All results', profile: 'Profile' },
} as const;

/**
 * The proof part of a city service page: which real doctors see this problem in this branch,
 * published clinical cases and patient reviews on the topic. Sections without data are hidden.
 */
export default function LandingProofSections({ locale, doctors, results, reviews }: LandingProofSectionsProps) {
  const copy = COPY[locale];
  return (
    <>
      {doctors.length > 0 && (
        <>
          <h2 className="mt-10 text-xl font-extrabold text-brand-text-primary">{copy.doctors}</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {doctors.map((doctor) => (
              <Link
                key={doctor.id}
                to={doctorPath(locale, doctorRouteKey(doctor))}
                className="flex gap-3 items-center p-3 bg-brand-white rounded-2xl border border-brand-sectiongray hover:border-brand-gold/40 no-underline"
              >
                <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-brand-offwhite">
                  {doctor.photo && (
                    <MediaImage
                      src={doctor.photo}
                      alt={doctor.name[locale]}
                      sizes="64px"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-extrabold text-sm text-brand-text-primary leading-snug">{doctor.name[locale]}</p>
                  <p className="mt-0.5 text-xs text-brand-text-muted line-clamp-2">{doctor.role[locale]}</p>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-brand-gold">
                    {copy.profile}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {results.length > 0 && (
        <>
          <h2 className="mt-10 text-xl font-extrabold text-brand-text-primary">{copy.results}</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {results.map((result) => {
              const image = result.comparisonImage || result.afterImage || result.beforeImage;
              return (
                <Link
                  key={result.id}
                  to={pagePath(locale, 'results')}
                  className="block bg-brand-white rounded-2xl border border-brand-sectiongray overflow-hidden hover:border-brand-gold/40 no-underline"
                >
                  {image && (
                    <div className="relative aspect-[4/3] bg-brand-offwhite">
                      <MediaImage
                        src={image}
                        alt={result.title[locale]}
                        sizes="(max-width: 640px) 100vw, 260px"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-3">
                    <p className="text-sm font-bold text-brand-text-primary leading-snug">{result.title[locale]}</p>
                    {result.sessions[locale] && (
                      <p className="mt-1 text-xs text-brand-text-muted">{result.sessions[locale]}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
          <Link
            to={pagePath(locale, 'results')}
            className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand-gold no-underline hover:underline"
          >
            {copy.allResults}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </>
      )}

      {reviews.length > 0 && (
        <>
          <h2 className="mt-10 text-xl font-extrabold text-brand-text-primary">{copy.reviews}</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {reviews.map((review) => (
              <figure key={review.id} className="p-4 bg-brand-white rounded-2xl border border-brand-sectiongray">
                <div className="flex items-center gap-0.5 text-brand-gold" role="img" aria-label={`${review.rating} / 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-current' : 'opacity-30'}`} />
                  ))}
                </div>
                <blockquote className="mt-2 text-sm text-brand-text-secondary leading-relaxed line-clamp-5">
                  <Quote className="inline w-3.5 h-3.5 text-brand-gold/60 mr-1 -mt-1" aria-hidden />
                  {review.comment[locale] || review.comment.uz}
                </blockquote>
                <figcaption className="mt-2 text-xs font-bold text-brand-text-primary">{review.authorName}</figcaption>
              </figure>
            ))}
          </div>
        </>
      )}
    </>
  );
}
