import { useState } from 'react';
import { Star, Send, CheckCircle2 } from 'lucide-react';
import type { Locale, ServiceCategory } from '../types';
import type { CustomerReview } from '../data/sitePagesContent';
import { emptyLocalized } from './LocalizedFieldGroup';

export interface ReviewSubmissionFormProps {
  locale: Locale;
  serviceCategories?: ServiceCategory[];
  onSubmit: (review: CustomerReview) => void | Promise<void>;
  /** Matn yozish uchun galochka ko‘rsatilsinmi (QR sahifa) */
  optionalComment?: boolean;
  /** Muvaffaqiyatdan keyin forma yashiriladi */
  dismissOnSuccess?: boolean;
  className?: string;
}

function StarRatingInput({
  value,
  onChange,
  size = 'lg',
}: {
  value: number;
  onChange: (rating: number) => void;
  size?: 'lg' | 'md';
}) {
  const [hover, setHover] = useState(0);

  const handleStarClick = (starValue: number) => {
    if (value === starValue) {
      onChange(0);
      return;
    }
    onChange(starValue);
  };

  const starClass = size === 'lg' ? 'w-9 h-9 sm:w-10 sm:h-10' : 'w-7 h-7';

  return (
    <div className="flex items-center justify-center sm:justify-start gap-1">
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
            className="p-1 cursor-pointer transition-transform active:scale-95"
            aria-label={`${starValue} yulduz`}
            aria-pressed={value === starValue}
          >
            <Star
              className={`${starClass} transition-colors ${
                active ? 'text-brand-gold fill-brand-gold' : 'text-brand-sectiongray fill-transparent'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

export default function ReviewSubmissionForm({
  locale,
  serviceCategories = [],
  onSubmit,
  optionalComment = false,
  dismissOnSuccess = false,
  className = '',
}: ReviewSubmissionFormProps) {
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [wantComment, setWantComment] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const serviceSelectPlaceholder =
    locale === 'uz' ? 'Xizmat turini tanlang' : locale === 'ru' ? 'Выберите услугу' : 'Select a service';

  const labels = {
    formTitle:
      locale === 'uz'
        ? "O'z fikringizni qoldiring"
        : locale === 'ru'
          ? 'Оставьте свой отзыв'
          : 'Share your experience',
    formDesc:
      locale === 'uz'
        ? 'Fikringiz yuborilgach darhol saytda ko‘rinadi.'
        : locale === 'ru'
          ? 'После отправки отзыв сразу появится на сайте.'
          : 'Your review will appear on the site right away.',
    name: locale === 'uz' ? 'Ismingiz' : locale === 'ru' ? 'Ваше имя' : 'Your name',
    service:
      locale === 'uz' ? 'Xizmat turi (ixtiyoriy)' : locale === 'ru' ? 'Услуга (необязательно)' : 'Service (optional)',
    comment: locale === 'uz' ? 'Fikringiz' : locale === 'ru' ? 'Ваш отзыв' : 'Your review',
    rating: locale === 'uz' ? 'Baholash' : locale === 'ru' ? 'Оценка' : 'Rating',
    submit: locale === 'uz' ? 'Fikr yuborish' : locale === 'ru' ? 'Отправить отзыв' : 'Submit review',
    addComment:
      locale === 'uz'
        ? 'Fikr matnini ham yozmoqchiman'
        : locale === 'ru'
          ? 'Хочу также написать отзыв'
          : 'I also want to write a comment',
    success:
      locale === 'uz'
        ? 'Rahmat! Fikringiz qabul qilindi va saytda chop etildi.'
        : locale === 'ru'
          ? 'Спасибо! Ваш отзыв принят и опубликован на сайте.'
          : 'Thank you! Your review was accepted and published on the site.',
    done: locale === 'uz' ? 'Tayyor' : locale === 'ru' ? 'Готово' : 'Done',
  };

  const ratingOnlyComment = {
    uz: 'Faqat baholash qoldirildi',
    ru: 'Оставлена только оценка',
    en: 'Rating only',
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!authorName.trim()) {
      setError(
        locale === 'uz'
          ? 'Ismingizni kiriting.'
          : locale === 'ru'
            ? 'Введите имя.'
            : 'Please enter your name.',
      );
      return;
    }

    if (rating < 1) {
      setError(
        locale === 'uz' ? 'Baholashni tanlang.' : locale === 'ru' ? 'Выберите оценку.' : 'Select a rating.',
      );
      return;
    }

    const includeComment = !optionalComment || wantComment;

    if (includeComment && !comment.trim()) {
      setError(
        locale === 'uz'
          ? "Fikr matnini yozing yoki galochkani o'chiring."
          : locale === 'ru'
            ? 'Напишите отзыв или снимите галочку.'
            : 'Write a comment or uncheck the box.',
      );
      return;
    }

    const localizedComment = emptyLocalized();
    if (includeComment && comment.trim()) {
      localizedComment[locale] = comment.trim();
    } else {
      localizedComment.uz = ratingOnlyComment.uz;
      localizedComment.ru = ratingOnlyComment.ru;
      localizedComment.en = ratingOnlyComment.en;
    }

    const selectedService = serviceCategories.find((category) => category.id === serviceId);

    setSubmitting(true);
    try {
      await onSubmit({
        id: `review-${Date.now()}`,
        authorName: authorName.trim(),
        rating,
        comment: localizedComment,
        service: selectedService?.title,
        serviceCategoryId: selectedService?.id,
        date: new Date().toISOString().slice(0, 10),
        published: true,
      });

      setAuthorName('');
      setComment('');
      setServiceId('');
      setRating(5);
      setWantComment(false);
      setSubmitted(true);
    } catch {
      setError(
        locale === 'uz'
          ? "Fikr yuborishda xatolik yuz berdi. Qayta urinib ko'ring."
          : locale === 'ru'
            ? 'Ошибка при отправке отзыва. Попробуйте снова.'
            : 'Failed to submit review. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted && dismissOnSuccess) {
    return (
      <div className={`text-center py-6 ${className}`}>
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-lg font-extrabold text-brand-text-primary mb-2">{labels.success}</h2>
        <p className="text-sm text-brand-text-muted leading-relaxed max-w-xs mx-auto">
          {locale === 'uz'
            ? 'Xizmatimizdan foydalanganingiz uchun rahmat!'
            : locale === 'ru'
              ? 'Спасибо, что воспользовались нашими услугами!'
              : 'Thank you for visiting Radeski Clinic!'}
        </p>
        <button
          type="button"
          onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            }
          }}
          className="mt-6 px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
        >
          {labels.done}
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      <h1 className="text-lg sm:text-xl font-extrabold text-brand-text-primary text-center">{labels.formTitle}</h1>
      <p className="text-xs sm:text-sm text-brand-text-muted text-center mt-2 mb-6 leading-relaxed">{labels.formDesc}</p>

      {submitted ? (
        <div className="flex items-start gap-2.5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{labels.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-2 tracking-wide">
              {labels.name}
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              autoComplete="name"
              className="w-full px-4 py-3.5 bg-brand-white border border-brand-sectiongray rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold/40"
              placeholder={locale === 'uz' ? 'Masalan: Nilufar A.' : 'e.g. Nilufar A.'}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-2 tracking-wide text-center sm:text-left">
              {labels.rating}
            </label>
            <StarRatingInput value={rating} onChange={setRating} size="lg" />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-2 tracking-wide">
              {labels.service}
            </label>
            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              className="w-full px-4 py-3.5 bg-brand-white border border-brand-sectiongray rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold/40 cursor-pointer appearance-none"
            >
              <option value="">{serviceSelectPlaceholder}</option>
              {serviceCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title[locale] || category.title.uz}
                </option>
              ))}
            </select>
          </div>

          {optionalComment ? (
            <label className="flex items-start gap-3 p-3.5 rounded-xl border border-brand-sectiongray bg-brand-white cursor-pointer select-none">
              <input
                type="checkbox"
                checked={wantComment}
                onChange={(e) => {
                  setWantComment(e.target.checked);
                  if (!e.target.checked) setComment('');
                }}
                className="mt-0.5 w-5 h-5 rounded border-brand-sectiongray text-brand-gold focus:ring-brand-gold/30 cursor-pointer shrink-0"
              />
              <span className="text-sm text-brand-text-primary leading-snug">{labels.addComment}</span>
            </label>
          ) : null}

          {(!optionalComment || wantComment) && (
            <div>
              <label className="block text-[10px] font-bold text-brand-text-muted uppercase mb-2 tracking-wide">
                {labels.comment}
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full min-h-[110px] px-4 py-3.5 bg-brand-white border border-brand-sectiongray rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold/40 resize-y"
                placeholder={
                  locale === 'uz'
                    ? 'Klinikadagi tajribangiz haqida yozing...'
                    : locale === 'ru'
                      ? 'Расскажите о вашем опыте...'
                      : 'Tell us about your experience...'
                }
              />
            </div>
          )}

          {error ? <p className="text-sm text-red-600 text-center">{error}</p> : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full px-5 py-4 bg-brand-gold hover:bg-brand-gold-dark disabled:opacity-60 text-white font-bold text-base rounded-xl transition-colors cursor-pointer inline-flex items-center justify-center gap-2 shadow-[0_8px_24px_-12px_rgba(192,153,73,0.65)]"
          >
            <Send className="w-5 h-5" />
            {submitting
              ? locale === 'uz'
                ? 'Yuborilmoqda...'
                : locale === 'ru'
                  ? 'Отправка...'
                  : 'Sending...'
              : labels.submit}
          </button>
        </form>
      )}
    </div>
  );
}
