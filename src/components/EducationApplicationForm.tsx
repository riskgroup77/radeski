import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import type { Locale } from '../types';
import { createAppointment } from '../api/publicApi';
import { ApiError } from '../api/client';

interface EducationApplicationFormProps {
  locale: Locale;
  programTitle: string;
  formIntro: string;
  formFields: string[];
}

export default function EducationApplicationForm({
  locale,
  programTitle,
  formIntro,
  formFields,
}: EducationApplicationFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const labels = {
    fullName:
      locale === 'uz' ? 'Familiya, ism, otasining ismi' : locale === 'ru' ? 'ФИО' : 'Full name',
    phone: locale === 'uz' ? 'Telefon raqami' : locale === 'ru' ? 'Телефон' : 'Phone number',
    email: locale === 'uz' ? 'Elektron pochta' : locale === 'ru' ? 'Электронная почта' : 'Email',
    education:
      locale === 'uz'
        ? 'Tibbiy ta’lim va mutaxassislik'
        : locale === 'ru'
          ? 'Медицинское образование и специальность'
          : 'Medical education and specialty',
    comment:
      locale === 'uz'
        ? 'Qo‘shimcha ma’lumot (yo‘nalish, modul, motivatsion xat)'
        : locale === 'ru'
          ? 'Дополнительная информация (направление, модуль, мотивационное письмо)'
          : 'Additional details (track, module, motivation letter)',
    submit:
      locale === 'uz' ? 'Arizani yuborish' : locale === 'ru' ? 'Отправить заявку' : 'Submit application',
    successTitle:
      locale === 'uz' ? 'Arizangiz qabul qilindi' : locale === 'ru' ? 'Заявка принята' : 'Application received',
    successDesc:
      locale === 'uz'
        ? 'Tez orada menejer siz bilan bog‘lanadi va hujjat topshirish bo‘yicha yo‘riqnoma beradi.'
        : locale === 'ru'
          ? 'Менеджер свяжется с вами и расскажет о порядке подачи документов.'
          : 'Our team will contact you with document submission instructions.',
    required:
      locale === 'uz' ? 'Telefon raqamini kiriting' : locale === 'ru' ? 'Введите номер телефона' : 'Enter phone number',
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!phone.trim()) {
      setError(labels.required);
      return;
    }

    setIsSubmitting(true);
    setError('');

    const payloadComment = [
      `[Ta'lim / Education] ${programTitle}`,
      fullName.trim() ? `FIO: ${fullName.trim()}` : null,
      email.trim() ? `Email: ${email.trim()}` : null,
      education.trim() ? `Education: ${education.trim()}` : null,
      comment.trim() ? `Details: ${comment.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      await createAppointment({
        phone_number: phone.trim(),
        client_name: fullName.trim() || null,
        comment: payloadComment,
        preferred_date: null,
        service_id: null,
      });
      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : locale === 'uz'
            ? 'Arizani yuborib bo‘lmadi. Qayta urinib ko‘ring.'
            : locale === 'ru'
              ? 'Не удалось отправить заявку. Попробуйте снова.'
              : 'Could not submit application. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 text-center">
        <CheckCircle className="mx-auto mb-3 h-8 w-8 text-emerald-600" />
        <p className="text-sm font-bold text-emerald-900">{labels.successTitle}</p>
        <p className="mt-2 text-sm font-light text-emerald-800">{labels.successDesc}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-brand-sectiongray bg-brand-offwhite/60 p-4 sm:p-5">
      <p className="mb-3 text-sm font-light leading-relaxed text-brand-text-secondary">{formIntro}</p>
      <ul className="mb-4 space-y-1">
        {formFields.map((field) => (
          <li key={field} className="text-xs font-light text-brand-text-muted">
            • {field}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder={labels.fullName}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-gold"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={`${labels.phone} *`}
          required
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-gold"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={labels.email}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-gold"
        />
        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          placeholder={labels.education}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-gold"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={labels.comment}
          rows={3}
          className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-gold"
        />
        {error ? <p className="text-xs text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-gold-dark disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {labels.submit}
        </button>
      </form>
    </div>
  );
}
