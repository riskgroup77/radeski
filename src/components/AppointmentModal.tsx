import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Phone, ShieldCheck } from 'lucide-react';
import { Locale, ServiceCategory } from '../types';
import { DICTIONARY } from '../data';
import { createAppointment } from '../api/publicApi';
import { ApiError } from '../api/client';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
  preselectedServiceId?: string;
  serviceCategories: ServiceCategory[];
}

export default function AppointmentModal({
  isOpen,
  onClose,
  locale,
  preselectedServiceId,
  serviceCategories,
}: AppointmentModalProps) {
  const d = DICTIONARY[locale];
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState(preselectedServiceId || '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setServiceId(preselectedServiceId || '');
      setError('');
      setIsSubmitted(false);
    }
  }, [isOpen, preselectedServiceId]);

  const resolveServiceId = (value: string): string | null => {
    if (!value) return null;
    for (const category of serviceCategories) {
      if (category.subServices.some((sub) => sub.id === value)) {
        return value;
      }
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError(
        locale === 'uz'
          ? "Iltimos, telefon raqamingizni kiriting"
          : locale === 'ru'
            ? 'Пожалуйста, введите номер телефона'
            : 'Please enter your phone number'
      );
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const resolvedServiceId = resolveServiceId(serviceId);
      await createAppointment({
        phone_number: phone.trim(),
        service_id: resolvedServiceId,
      });
      setIsSubmitted(true);
      setPhone('');
      setServiceId('');
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : locale === 'uz'
            ? 'Arizani yuborishda xatolik yuz berdi'
            : locale === 'ru'
              ? 'Ошибка при отправке заявки'
              : 'Failed to submit request'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            id="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0c1424]/70 backdrop-blur-sm"
          />

          <motion.div
            id="appointment-modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-150"
          >
            <div className="h-2 bg-brand-gold" />

            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                      {d.appointmentBtn}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                      {locale === 'uz'
                        ? "Telefon raqamingizni qoldiring, operatorlarimiz tez orada bog'lanadi"
                        : locale === 'ru'
                          ? 'Оставьте номер телефона, наши операторы скоро свяжутся с вами'
                          : 'Leave your phone number and our team will contact you shortly'}
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-rose-50 text-rose-600 rounded-lg text-sm font-medium border border-rose-100">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                        {d.formPhone} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4.5 h-4.5 text-slate-400" />
                        <input
                          id="phone-input"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold transition-all text-slate-800 placeholder-slate-400 text-sm"
                          placeholder="+998 (__) ___-__-__"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                        {d.formService}
                      </label>
                      <select
                        id="service-select"
                        value={serviceId}
                        onChange={(e) => setServiceId(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold transition-all text-slate-800 text-sm cursor-pointer"
                      >
                        <option value="">
                          {locale === 'uz' ? '-- Umumiy konsultatsiya --' : locale === 'ru' ? '-- Общая консультация --' : '-- General consultation --'}
                        </option>
                        {serviceCategories.map((cat) => (
                          <optgroup key={cat.id} label={cat.title[locale]}>
                            {cat.subServices.map((sub) => (
                              <option key={sub.id} value={sub.id}>
                                {sub.name[locale]}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    <button
                      id="submit-form-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 bg-brand-gold hover:bg-brand-gold-dark text-white font-medium py-3 px-4 rounded-xl shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/20 active:scale-98 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>{locale === 'uz' ? 'Yuborilmoqda...' : locale === 'ru' ? 'Отправка...' : 'Submitting...'}</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-5 h-5" />
                          <span>{d.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-4 border border-brand-gold/20"
                  >
                    <CheckCircle className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {locale === 'uz' ? "Arizangiz qabul qilindi!" : locale === 'ru' ? 'Заявка принята!' : 'Request Received!'}
                  </h3>
                  <p className="text-slate-500 text-sm mt-3 max-w-sm">
                    {d.formSuccess}
                  </p>
                  <button
                    id="success-close-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="mt-6 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm transition-colors cursor-pointer"
                  >
                    {d.closeBtn}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
