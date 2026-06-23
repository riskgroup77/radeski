import { useEffect, useMemo, useState } from 'react';
import { Star, Quote, Send, CheckCircle2 } from 'lucide-react';
import type { Locale, ServiceCategory } from '../types';
import type { CustomerReview } from '../data/sitePagesContent';
import HomeCarousel from './HomeCarousel';
import { emptyLocalized } from './LocalizedFieldGroup';

interface CustomerReviewsSectionProps {
  locale: Locale;
  reviews: CustomerReview[];
  serviceCategories?: ServiceCategory[];
  onSubmitReview: (review: CustomerReview) => void;
}

function StarRatingDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'text-brand-gold fill-brand-gold' : 'text-brand-sectiongray'
          }`}
        />
      ))}
    </div>
  );
}

function StarRatingInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (rating: number) => void;
}) {
  const [hover, setHover] = useState(0);

  const handleStarClick = (starValue: number) => {
    if (value === starValue) {
      onChange(0);
      return;
    }
    onChange(starValue);
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const preview = hover || value;
        const active = starValue <= preview;
        return (
          <button
            key={starValue}
            type="button"
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleStarClick(starValue)}
            className="p-0.5 cursor-pointer transition-transform hover:scale-110"
            aria-label={`${starValue} yulduz`}
            aria-pressed={value === starValue}
          >
            <Star
              className={`w-7 h-7 transition-colors ${
                active ? 'text-brand-gold fill-brand-gold' : 'text-brand-sectiongray fill-transparent'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function CustomerReviewsSection({
  locale,
  reviews,
  serviceCategories = [],
  onSubmitReview,
}: CustomerReviewsSectionProps) {
  const publishedReviews = useMemo(
    () => reviews.filter((review) => review.published),
    [reviews],
  );

  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const serviceSelectPlaceholder =
    locale === 'uz' ? 'Xizmat turini tanlang' : locale === 'ru' ? 'Выберите услугу' : 'Select a service';

  const labels = {
    badge:
      locale === 'uz' ? 'Mijozlar fikri' : locale === 'ru' ? 'Отзывы клиентов' : 'Client testimonials',
    title:
      locale === 'uz'
        ? 'Bemorlarimiz nima deyishadi?'
        : locale === 'ru'
          ? 'Что говорят наши пациенты?'
          : 'What our patients say',
    desc:
      locale === 'uz'
        ? 'Radeski klinikasida davolanish o\'tgan bemorlarimizning haqiqiy tajribalari.'
        : locale === 'ru'
          ? 'Реальные впечатления пациентов, прошедших лечение в клинике Radeski.'
          : 'Real experiences from patients treated at Radeski Clinic.',
    formTitle:
      locale === 'uz'
        ? 'O\'z fikringizni qoldiring'
        : locale === 'ru'
          ? 'Оставьте свой отзыв'
          : 'Share your experience',
    formDesc:
      locale === 'uz'
        ? 'Fikringiz moderatsiyadan o\'tgach saytda chiqadi.'
        : locale === 'ru'
          ? 'Отзыв появится на сайте после модерации.'
          : 'Your review will appear after moderation.',
    name:
      locale === 'uz' ? 'Ismingiz' : locale === 'ru' ? 'Ваше имя' : 'Your name',
    service:
      locale === 'uz' ? 'Xizmat turi (ixtiyoriy)' : locale === 'ru' ? 'Услуга (необязательно)' : 'Service (optional)',
    comment:
      locale === 'uz' ? 'Fikringiz' : locale === 'ru' ? 'Ваш отзыв' : 'Your review',
    rating:
      locale === 'uz' ? 'Baholash' : locale === 'ru' ? 'Оценка' : 'Rating',
    submit:
      locale === 'uz' ? 'Fikr yuborish' : locale === 'ru' ? 'Отправить отзыв' : 'Submit review',
    success:
      locale === 'uz'
        ? 'Rahmat! Fikringiz qabul qilindi va tez orada ko\'rib chiqiladi.'
        : locale === 'ru'
          ? 'Спасибо! Ваш отзыв принят и скоро будет проверен.'
          : 'Thank you! Your review was received and will be reviewed shortly.',
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!authorName.trim() || !comment.trim()) {
      setError(
        locale === 'uz'
          ? 'Ism va fikr matnini to\'ldiring.'
          : locale === 'ru'
            ? 'Заполните имя и текст отзыва.'
            : 'Please fill in your name and review text.',
      );
      return;
    }

    if (rating < 1) {
      setError(
        locale === 'uz' ? 'Baholashni tanlang.' : locale === 'ru' ? 'Выберите оценку.' : 'Select a rating.',
      );
      return;
    }

    const localizedComment = emptyLocalized();
    localizedComment[locale] = comment.trim();

    const selectedService = serviceCategories.find((category) => category.id === serviceId);

    onSubmitReview({
      id: `review-${Date.now()}`,
      authorName: authorName.trim(),
      rating,
      comment: localizedComment,
      service: selectedService?.title,
      date: new Date().toISOString().slice(0, 10),
      published: false,
    });

    setAuthorName('');
    setComment('');
    setServiceId('');
    setRating(5);
    setSubmitted(true);
  };

  useEffect(() => {
    if (!submitted) return;
    const timer = window.setTimeout(() => setSubmitted(false), 6000);
    return () => window.clearTimeout(timer);
  }, [submitted]);

  return (
    <section id="customer-reviews" className="py-16 bg-brand-white border-t border-brand-sectiongray">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">{labels.badge}</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mt-1 tracking-tight">
            {labels.title}
          </h3>
          <p className="text-brand-text-muted mt-4 text-sm sm:text-base leading-relaxed">{labels.desc}</p>
        </div>

        {publishedReviews.length > 0 && (
          <div className="px-2 sm:px-10 mb-12">
            <HomeCarousel
              items={publishedReviews}
              visibleCount={3}
              autoPlayMs={5000}
              getKey={(review) => review.id}
              gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              ariaLabel={
                locale === 'uz'
                  ? 'Mijozlar fikrlari karuseli'
                  : locale === 'ru'
                    ? 'Карусель отзывов'
                    : 'Reviews carousel'
              }
              renderItem={(review) => (
                <div className="relative px-3 sm:px-4 py-5 sm:py-6 text-center h-full flex flex-col items-center">
                  <Quote className="w-8 h-8 text-brand-gold/25 mx-auto mb-3" aria-hidden="true" />
                  <StarRatingDisplay rating={review.rating} />
                  <p className="mt-4 text-sm sm:text-base text-brand-text-primary leading-relaxed font-light italic line-clamp-4 flex-1">
                    "{review.comment[locale] || review.comment.uz || review.comment.ru || review.comment.en}"
                  </p>
                  <div className="mt-5 flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold font-bold text-xs flex items-center justify-center">
                      {getInitials(review.authorName)}
                    </div>
                    <p className="font-extrabold text-brand-text-primary text-sm">{review.authorName}</p>
                    {review.service?.[locale] || review.service?.uz ? (
                      <span className="text-[9px] font-bold uppercase tracking-wide text-brand-gold line-clamp-1">
                        {review.service?.[locale] || review.service?.uz}
                      </span>
                    ) : null}
                    <span className="text-[10px] text-brand-text-muted font-mono">{review.date}</span>
                  </div>
                </div>
              )}
            />
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-brand-sectiongray bg-brand-offwhite/60 p-6 sm:p-8">
            <h4 className="text-lg font-extrabold text-brand-text-primary text-center">{labels.formTitle}</h4>
            <p className="text-xs text-brand-text-muted text-center mt-2 mb-6">{labels.formDesc}</p>

            {submitted ? (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{labels.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1.5">
                    {labels.name}
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-white border border-brand-sectiongray rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold/40"
                    placeholder={locale === 'uz' ? 'Masalan: Nilufar A.' : 'e.g. Nilufar A.'}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1.5">
                    {labels.rating}
                  </label>
                  <StarRatingInput value={rating} onChange={setRating} />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1.5">
                    {labels.service}
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-white border border-brand-sectiongray rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold/40 cursor-pointer"
                  >
                    <option value="">{serviceSelectPlaceholder}</option>
                    {serviceCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title[locale] || category.title.uz}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-1.5">
                    {labels.comment}
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-brand-white border border-brand-sectiongray rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold/40 resize-y min-h-[100px]"
                    placeholder={
                      locale === 'uz'
                        ? 'Klinikadagi tajribangiz haqida yozing...'
                        : locale === 'ru'
                          ? 'Расскажите о вашем опыте...'
                          : 'Tell us about your experience...'
                    }
                  />
                </div>

                {error ? <p className="text-xs text-red-600">{error}</p> : null}

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm rounded-xl transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {labels.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
