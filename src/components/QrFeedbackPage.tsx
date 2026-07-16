import { useEffect } from 'react';
import type { Locale, ServiceCategory } from '../types';
import type { CustomerReview } from '../data/sitePagesContent';
import SiteLogo from './SiteLogo';
import ReviewSubmissionForm from './ReviewSubmissionForm';

interface QrFeedbackPageProps {
  locale: Locale;
  serviceCategories?: ServiceCategory[];
  onSubmitReview: (review: CustomerReview) => void | Promise<void>;
}

export default function QrFeedbackPage({
  locale,
  serviceCategories = [],
  onSubmitReview,
}: QrFeedbackPageProps) {
  useEffect(() => {
    const title =
      locale === 'uz'
        ? "Fikr qoldirish — Radeski"
        : locale === 'ru'
          ? 'Оставить отзыв — Radeski'
          : 'Leave feedback — Radeski';
    document.title = title;
    return () => {
      document.title = 'Radeski Skin & Aesthetic Clinic';
    };
  }, [locale]);

  return (
    <section
      id="qr-feedback-page"
      className="min-h-[calc(100dvh-2rem)] sm:min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center px-4 py-6 sm:py-10 bg-gradient-to-b from-brand-offwhite via-brand-white to-brand-offwhite"
    >
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <SiteLogo variant="header" />
        </div>

        <div className="rounded-2xl border border-brand-sectiongray bg-brand-white/90 backdrop-blur-sm p-5 sm:p-7 shadow-[0_12px_40px_-20px_rgba(7,27,46,0.18)]">
          <ReviewSubmissionForm
            locale={locale}
            serviceCategories={serviceCategories}
            onSubmit={onSubmitReview}
            optionalComment
            dismissOnSuccess
          />
        </div>

        <p className="text-center text-[11px] text-brand-text-muted mt-5 leading-relaxed px-2">
          {locale === 'uz'
            ? 'Radeski Skin & Aesthetic Clinic — sizning fikringiz biz uchun muhim.'
            : locale === 'ru'
              ? 'Radeski Skin & Aesthetic Clinic — ваше мнение важно для нас.'
              : 'Radeski Skin & Aesthetic Clinic — your feedback matters to us.'}
        </p>
      </div>
    </section>
  );
}
