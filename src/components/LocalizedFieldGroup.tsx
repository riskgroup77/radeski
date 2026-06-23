import { Locale } from '../types';

export type LocalizedText = { uz: string; ru: string; en: string };

export const emptyLocalized = (): LocalizedText => ({ uz: '', ru: '', en: '' });

const LANG_META: { key: Locale; label: string }[] = [
  { key: 'uz', label: "O'zbekcha" },
  { key: 'ru', label: 'Русский' },
  { key: 'en', label: 'English' },
];

interface LocalizedFieldGroupProps {
  label: string;
  values: LocalizedText;
  onChange: (values: LocalizedText) => void;
  multiline?: boolean;
  rows?: number;
  requiredLang?: Locale;
  placeholder?: Partial<LocalizedText>;
  hint?: string;
  compact?: boolean;
}

export default function LocalizedFieldGroup({
  label,
  values,
  onChange,
  multiline = false,
  rows = 3,
  requiredLang = 'uz',
  placeholder,
  hint,
  compact = false,
}: LocalizedFieldGroupProps) {
  const inputClass =
    'w-full min-w-0 px-3 py-2.5 bg-brand-white border border-brand-sectiongray rounded-lg text-sm text-brand-text-primary placeholder:text-brand-text-muted/60 focus:bg-brand-white focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold/40 transition-shadow';

  return (
    <div className="rounded-xl border border-brand-sectiongray/80 bg-brand-white overflow-hidden shadow-sm">
      <div className="flex items-start justify-between gap-3 px-4 py-3 bg-gradient-to-r from-brand-offwhite/80 to-brand-white border-b border-brand-sectiongray/60">
        <div className="min-w-0">
          <p className="text-xs font-bold text-brand-text-primary tracking-wide">{label}</p>
          {hint && (
            <p className="text-[10px] text-brand-text-muted mt-0.5 leading-relaxed">{hint}</p>
          )}
        </div>
        <span className="shrink-0 text-[9px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold-light/10 px-2 py-1 rounded-md border border-brand-gold/15">
          3 til
        </span>
      </div>

      <div className={compact ? 'p-3 space-y-2.5' : 'p-4 space-y-3'}>
        {LANG_META.map(({ key, label: langLabel }) => (
          <div
            key={key}
            className="grid grid-cols-1 sm:grid-cols-[88px_minmax(0,1fr)] gap-2 sm:gap-3 items-start"
          >
            <div className="flex sm:flex-col items-center sm:items-start gap-1.5 sm:gap-1 pt-2 sm:pt-2.5">
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold border ${
                  requiredLang === key
                    ? 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold-dark'
                    : 'bg-brand-offwhite border-brand-sectiongray text-brand-text-muted'
                }`}
              >
                {key.toUpperCase()}
              </span>
              <div className="min-w-0 text-center sm:text-left">
                <span className="block text-[10px] font-semibold text-brand-text-primary leading-tight">
                  {langLabel}
                </span>
                {requiredLang === key && (
                  <span className="text-[9px] font-bold text-red-500">Majburiy *</span>
                )}
              </div>
            </div>

            <div className="min-w-0 w-full">
              {multiline ? (
                <textarea
                  rows={rows}
                  value={values[key] || ''}
                  placeholder={placeholder?.[key] || `${langLabel}...`}
                  onChange={(e) => onChange({ ...values, [key]: e.target.value })}
                  className={`${inputClass} leading-relaxed resize-y`}
                  style={{ minHeight: `${rows * 24 + 20}px` }}
                />
              ) : (
                <input
                  type="text"
                  value={values[key] || ''}
                  placeholder={placeholder?.[key] || `${langLabel}...`}
                  onChange={(e) => onChange({ ...values, [key]: e.target.value })}
                  className={inputClass}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function mergeLocalized(values?: Partial<LocalizedText>): LocalizedText {
  const trimField = (value: unknown) => (typeof value === 'string' ? value.trim() : '');
  return {
    uz: trimField(values?.uz) || '',
    ru: trimField(values?.ru) || '',
    en: trimField(values?.en) || '',
  };
}

export function isLocalizedFilled(values?: Partial<LocalizedText>, lang: Locale = 'uz'): boolean {
  const value = values?.[lang];
  return typeof value === 'string' && value.trim().length > 0;
}
